import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('token');// Your logic to determine if user is logged in (e.g., checking local storage for a token)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null; // Or you could return a placeholder, spinner, etc.
    }

    return children;
};

export default ProtectedRoute;
