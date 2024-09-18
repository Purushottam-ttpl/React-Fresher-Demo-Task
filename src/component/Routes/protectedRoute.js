import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Header/Navbar';



const AuthProtected = ({ element }) => {
    const {isAuthenticated, accessToken} = useSelector((state) => state.auth);
    let token = localStorage.getItem('Token');

    useEffect(()=>{
        token = localStorage.getItem('Token')
    }, [isAuthenticated])

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
    const {isAuthenticated, accessToken, role} = useSelector((state) => state.auth);
    let token = localStorage.getItem('Token');
    let Role = localStorage.getItem('UserType');

    useEffect(()=>{
        token = localStorage.getItem('Token')
        Role = localStorage.getItem('UserType');
    }, [isAuthenticated])

    if (token) {
        if (Role === 'Admin') {
            return <Navigate to="/contact" replace />;
          } 
          else if (Role === 'Patient') {
            return <Navigate to="/about" replace />;
          } 
          else if(!Role){
            return <Navigate to="/unAuth" replace />; 
          }

        // return <Navigate to="/home" replace />;
    }
    
    return element;
};


export {AuthProtected, FullPageRoute};
