import React from "react";
import Navbar from "../Header/Navbar";
import { useNavigate } from "react-router-dom";

const Home =()=>{
    const navigate = useNavigate();

    const handleLogout=(e)=>{
        navigate("/");
        console.log("button clicked---->",e);
    };
    return(
        <>
            <Navbar />
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Home;