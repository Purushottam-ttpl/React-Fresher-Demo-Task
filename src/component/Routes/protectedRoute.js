import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Header/Navbar';

const AuthProtected = ({ element }) => {
    const {isAuthenticated, accessToken} = useSelector((state) => state.auth);


    console.log("isAuthenticated from AuthProtected route---->",isAuthenticated);
    console.log("accessToken from AuthProtected route---->",accessToken);

    if (!isAuthenticated && !accessToken) {
        return <Navigate to="/" replace />;
    }

   
    return (   
    <>
    <Navbar />
    {element}
    </>
    )
   
};

const FullPageRoute = ({ element }) => {
    const {isAuthenticated, accessToken} = useSelector((state) => state.auth);


    console.log("isAuthenticated from FullPageRoute route---->",isAuthenticated);
    console.log("accessToken from FullPageRoute route---->",accessToken);

    if (isAuthenticated && accessToken) {
        return <Navigate to="/home" replace />;
    }

    
    return element;
};


export {AuthProtected, FullPageRoute};
