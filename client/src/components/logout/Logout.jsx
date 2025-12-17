import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext";

export default function Logout() {
    const { logoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        logoutHandler()
            .then(() => navigate('/'))
            .catch((err) => {
                console.error("Logout failed:", err);
                alert('Problem with logout');
                navigate('/');
            });
    }, [logoutHandler, navigate]);

    return null;
}