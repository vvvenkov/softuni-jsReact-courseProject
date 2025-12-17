import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import useRequest from '../../hooks/useRequest';
import UserContext from '../../contexts/UserContext';

const likesUrl = '/jsonstore/likes';

export default function Details() {
    const { bearId } = useParams();
    const navigate = useNavigate();
    
    const { request, data: bear } = useRequest(`/jsonstore/bears/${bearId}`);
    
    const { user, isAuthenticated } = useContext(UserContext);
    
    const [likes, setLikes] = useState([]);
    const [totalLikes, setTotalLikes] = useState(0);

    const hasUserLiked = likes.some(like => like.userId === user?._id);
    
    useEffect(() => {
        if (!bear) return;
        
        request(likesUrl)
            .then(allLikesObject => {
                const allLikes = Object.values(allLikesObject || {});
                const bearLikes = allLikes.filter(like => like.bearId === bearId);
                
                setLikes(bearLikes);
                setTotalLikes(bearLikes.length);
            })
            .catch(err => console.error('Failed to fetch likes:', err));
    }, [bearId, request, bear]);


    const onLikeHandler = async () => {
        if (!isAuthenticated) {
            alert('You must be logged in to like a bear.');
            return navigate('/login');
        }

        try {
            let method = 'POST';
            let likeData = { bearId, userId: user._id };
            let endpoint = likesUrl;

            if (hasUserLiked) {
                const userLike = likes.find(like => like.userId === user._id);
                
                if (userLike && userLike._id) {
                    method = 'DELETE';
                    endpoint = `${likesUrl}/${userLike._id}`;
                    likeData = null; 
                } else {
                    throw new Error("Could not find like ID for deletion.");
                }
            }
            
            await request(endpoint, method, likeData, { accessToken: user.accessToken });

            if (hasUserLiked) {
                setLikes(state => state.filter(like => like.userId !== user._id));
                setTotalLikes(count => count - 1);
            } else {
                setLikes(state => [...state, { bearId, userId: user._id, _id: 'temp-id-' + Date.now() }]);
                setTotalLikes(count => count + 1);
            }

        } catch (err) {
            console.error('Failed to handle like operation:', err);
            alert('Failed to process your like. Please try again.');
        }
    };

    if (!bear) {
        return <p>Loading bear details...</p>;
    }

    const isLikeButtonVisible = isAuthenticated;

    return (
        <section id="bear-details">
            <div className="details-header">
                <h1>Bear Details: {bear.title}</h1>
                <p className="summary">{bear.summary}</p>
            </div>
            
            <div className="details-content">
                <div className="details-image">
                    <img src={bear.imageUrl} alt={bear.title} />
                </div>
                
                <div className="details-text">
                    <p className="description">
                        {bear.description}
                    </p>

                    <div className="actions-section">
                        {isLikeButtonVisible && (
                            <div className="user-actions">
                                <button 
                                    onClick={onLikeHandler} 
                                    className={`btn ${hasUserLiked ? 'unlike-btn' : 'like-btn'}`}
                                >
                                    {hasUserLiked ? 'Unlike' : 'Like'}
                                </button>
                            </div>
                        )}
                        
                        <div className="likes-info">
                            <span className="likes-count">Total Likes: {totalLikes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}