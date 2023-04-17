import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from './components/Providers/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(UserContext)
    const location = useLocation()

    if (loading) {
        return <progress className="progress w-56 progress-primary"></progress>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" replace={true} state={{ from: location }}></Navigate>

};

export default PrivateRoute;