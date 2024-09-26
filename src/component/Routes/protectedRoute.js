import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../Header/Navbar';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Pages/sidebar';



const AuthProtected = ({ element, allowedRoles }) => {
    const {isAuthenticated, accessToken, role} = useSelector((state) => state.auth);
    let token = localStorage.getItem('Token');
    let Role = localStorage.getItem("UserType");
    const navigate = useNavigate();

    useEffect(()=>{
        token = localStorage.getItem('Token')
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
        console.log('Allowed roles if')
        return <Navigate to="/unAuth" replace />;
    }
   
    return (   
    <div style={{overflowX: "hidden", height: "100vh", width: "100vw"}}>
    <Navbar />

    {Role === "Admin" ? (
        <div className='main' style={{width:"100vw", height: "100vh", display: "flex"}}>
          <Sidebar />

           <div className="panel-container" style={{flexGrow: 1, backgroundColor: "#ffffff", height: "100vh", width: "100vw"}}>
               {element}
            </div>
         </div>

    ) : (element)}
   
    </div>
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
        if (Role === 'Admin' || 'Patient') {
            return <Navigate to="/home" replace />;
          }
    }       
    return element;
};


export {AuthProtected, FullPageRoute};
