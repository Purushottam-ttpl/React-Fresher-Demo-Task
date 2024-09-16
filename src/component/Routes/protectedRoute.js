import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Header/Navbar';



const AuthProtected = ({ element }) => {
    const {isAuthenticated, accessToken} = useSelector((state) => state.auth);
    let token = localStorage.getItem('Token');
    // console.log('authtoken', token);
    
    useEffect(()=>{
        token = localStorage.getItem('Token')
    }, [isAuthenticated])


    // console.log("login page token",token);

    // console.log("isAuthenticated from AuthProtected route---->",isAuthenticated);
    // console.log("accessToken from AuthProtected route---->",accessToken);

    if (!token) {
        return <Navigate to="/login" replace />;
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
    let token = localStorage.getItem('Token');
    // console.log("fullpagetoken", token);
    useEffect(()=>{
        token = localStorage.getItem('Token')
    }, [isAuthenticated])


    // console.log("isAuthenticated from FullPageRoute route---->",isAuthenticated);
    // console.log("accessToken from FullPageRoute route---->",accessToken);

    if (token) {
        return <Navigate to="/home" replace />;
    }

    
    return element;
};


export {AuthProtected, FullPageRoute};
