import React from "react";
import Navbar from "../Header/Navbar";
import { useNavigate } from "react-router-dom";
import Example from "../Table/table";

const Home =()=>{
    return(
        <div>
            <h1 style={{textAlign:"center", padding: "20px", background: "white", height:"100vh"}}>Home Page</h1>
        </div>
    );
}

export default Home;