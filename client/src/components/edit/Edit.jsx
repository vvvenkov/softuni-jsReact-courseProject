import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import useRequest from "../../hooks/useRequest";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Edit() {
    const { bearId } = useParams();
    const navigate = useNavigate();
    const { request, data: currentBear } = useRequest(`/jsonstore/bears/${bearId}`);
    const { user, isAuthenticated } = useContext(UserContext);

    const initialValues = { title: '', summary: '', imageUrl: '', description: '' };

    const submitHandler = async (values, e) => {
        e.preventDefault();

        if (!isAuthenticated || user._id !== currentBear._ownerId) {
            return navigate(`/bears/${bearId}/details`);
        }

        try {
            await request(
                `/jsonstore/bears/${bearId}`, 
                'PUT', 
                values, 
                { accessToken: user.accessToken }
            );

            navigate('/bears/myBears');

        } catch (err) {
            console.error('Failed to edit bear:', err);
            alert('Failed to edit bear.');
        }
    };

    const { values, register, formAction, setValues } = useForm(submitHandler, initialValues);


    useEffect(() => {
        if (currentBear && Object.keys(currentBear).length > 0) {
            setValues({
                title: currentBear.title,
                summary: currentBear.summary,
                imageUrl: currentBear.imageUrl,
                description: currentBear.description,
            });
        }
    }, [currentBear, setValues]);


    if (!currentBear) {
        return <p>Loading bear data for editing...</p>;
    }

    return (
        <section id="edit-bear-page">
            <form id="edit" onSubmit={formAction}>
                <div className="container">
                    <h1>Edit Bear: {currentBear.title}</h1>

                    <label htmlFor="title">Bear Name</label>
                    <input type="text" id="title" {...register('title')} />

                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" id="imageUrl" {...register('imageUrl')} />

                    <label htmlFor="summary">Summary</label>
                    <textarea id="summary" {...register('summary')} />

                    <label htmlFor="description">Description</label>
                    <textarea id="description" {...register('description')} />

                    <input type="submit" className="btn submit" value="Save Changes" />
                </div>
            </form>
        </section>
    );
}