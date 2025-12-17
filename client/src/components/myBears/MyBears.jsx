import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import BearCard from "../bearCard/BearCard";
import useRequest from "../../hooks/useRequest";
import UserContext from "../../contexts/UserContext";

export default function MyBears() {
    const [bears, setBears] = useState(null);
    const { request } = useRequest();
    const { user, isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();


    const onDeleteHandler = async (bearId, bearTitle) => {
        const confirmed = confirm(`Are you sure you want to delete your bear: "${bearTitle}"?`);

        if (!confirmed) {
            return;
        }

        try {
            await request(
                `/jsonstore/bears/${bearId}`,
                'DELETE',
                null,
                { accessToken: user.accessToken }
            );

            setBears(state => state.filter(bear => bear._id !== bearId));

        } catch (err) {
            console.error(`Failed to delete bear ${bearId}:`, err);
            alert("Failed to delete bear. Please try again.");
        }
    };

    useEffect(() => {
        if (!isAuthenticated || !user?._id) {
            setBears([]);
            return;
        }

        const endpoint = "/jsonstore/bears";

        request(endpoint)
            .then(result => {
                const allBears = Object.values(result || {});
                const myBears = allBears.filter(

                    bear => bear._ownerId === user._id
                );

                setBears(myBears);
            })
            .catch(err => {
                console.error("Failed to fetch user's bears:", err);
                setBears([]);
            });
    }, [request, user, isAuthenticated]);

    if (bears === null) {
        return <h3 className="loading">Bear with me...</h3>;
    }

    return (
        <main>
            <h2>My Bear Collection</h2>

            <section className="cards">
                {bears.length > 0 ? (
                    bears.map(bear => (

                        <div key={bear._id} className="bear-card-wrapper">


                            <BearCard {...bear} />


                            <div className="card-actions">
                                <button
                                    onClick={() => navigate(`/bears/${bear._id}/edit`)}
                                    className="btn card-edit-btn"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDeleteHandler(bear._id, bear.title)}
                                    className="btn card-delete-btn"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h3 className="no-articles">
                        You haven't added any bears yet.
                    </h3>
                )}
            </section>
        </main>
    );
}