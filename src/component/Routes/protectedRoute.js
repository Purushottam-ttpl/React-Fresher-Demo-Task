import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
    const isValid = useSelector((state) => state.auth.isAuthenticated);

    if (!isValid) {
        return <Navigate to="/" replace />;
    }

    return element;
};

export default ProtectedRoute;
