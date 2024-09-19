import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Header/Navbar';



const AuthProtected = ({ element, allowedRoles }) => {
    const {isAuthenticated, accessToken, role} = useSelector((state) => state.auth);
    let token = localStorage.getItem('Token');
    let Role = localStorage.getItem("UserType");

    useEffect(()=>{
      let  token = localStorage.getItem('Token')
        Role = localStorage.getItem("UserType");
    }, [isAuthenticated])

    console.log("navigate authenticate---->",isAuthenticated);
    console.log("navigate token---->",token);


    if (!token || !isAuthenticated || !Role) {
        console.log("navigate----->")
        return <Navigate to="/" />;
    }

    console.log("Allowedroles----->",allowedRoles[0])

    if (!allowedRoles.includes(Role)) {
        return <Navigate to="/*" replace />;
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
    let Role = localStorage.getItem("UserType");
    

    useEffect(()=>{
        token = localStorage.getItem('Token')
        Role = localStorage.getItem("UserType");
       
    }, [isAuthenticated])

    if (token && isAuthenticated && Role) {
        if (Role === 'Admin') {
            return <Navigate to="/dashboard" replace />;
          } 
          else if (Role === 'Patient') {
            return <Navigate to="/about" replace />;
          } 
        //   else if(!Role){
        //     return <Navigate to="/unAuth" replace />; 
        //   }
          
        //   return <Navigate to="/home" replace />;
    }      
    
    return element;
};


export {AuthProtected, FullPageRoute};
