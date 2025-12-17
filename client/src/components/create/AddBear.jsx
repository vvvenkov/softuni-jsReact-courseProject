import { useContext } from "react";
import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import useRequest from "../../hooks/useRequest";
import UserContext from "../../contexts/UserContext";

export default function AddBear() {
    const navigate = useNavigate();
    const { request } = useRequest();
    const { user, isAuthenticated } = useContext(UserContext);

    const submitHandler = async (values, e) => {
        e.preventDefault(); 

        if (!isAuthenticated) {
            alert('You must be logged in to add a bear.');
            return navigate('/login');
        }

        if (!values.title || !values.summary || !values.imageUrl || !values.description) {
            return alert('All fields are required!');
        }

        try {
            const endpoint = "/jsonstore/bears";

            const bearData = {
                ...values,
                _ownerId: user._id, 
            };

            await request(
                endpoint,
                'POST',
                bearData,
                { accessToken: user.accessToken }
            );

            navigate('/bears/myBears');

        } catch (err) {
            console.error('Failed to add bear:', err);
            alert('Failed to add bear.');
        }
    };

    const { register, formAction } = useForm(submitHandler, {
        title: '',
        summary: '',
        imageUrl: '',
        description: '',
    });

    return (
        <section id="add-bear-page">
            <form id="add" onSubmit={formAction}>
                <div className="container">
                    <h1>Add a New Bear</h1>

                    <label htmlFor="title">Bear Name</label>
                    <input type="text" id="title" {...register('title')} />

                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" id="imageUrl" {...register('imageUrl')} />

                    <label htmlFor="summary">Summary</label>
                    <textarea id="summary" {...register('summary')} />

                    <label htmlFor="description">Description</label>
                    <textarea id="description" {...register('description')} />

                    <input type="submit" className="btn submit" value="Add Bear" />
                </div>
            </form>
        </section>
    );
}
