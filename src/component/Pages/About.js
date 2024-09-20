import React from "react";
import Navbar from "../Header/Navbar";
import Example from "../Table/table";

const About =()=>{
    return(
        <div style={{background: "white", height:"100vh"}}>
            {/* <Navbar /> */}
            <h1 style={{textAlign:"center", padding: "20px"}}>About Page</h1>
            <Example />
        </div>
    );
}

export default About;