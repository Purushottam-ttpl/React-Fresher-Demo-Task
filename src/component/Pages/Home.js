import React from "react";
import Navbar from "../Header/Navbar";
import { useNavigate } from "react-router-dom";
import Example from "../Table/table";

const Home =()=>{
    // const navigate = useNavigate();

    // const handleLogout=(e)=>{
    //     navigate("/");
    //     console.log("button clicked---->",e);
    // };
    return(
        <div>

            {/* <Navbar /> */}
            <h1 style={{textAlign:"center", padding: "20px", background: "white", height:"100vh"}}>Home Page</h1>
            {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
    );
}

export default Home;