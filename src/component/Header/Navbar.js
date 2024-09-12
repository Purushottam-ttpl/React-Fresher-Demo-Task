import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import { Private_routes } from "../Routes/Constant";

const Navbar =()=>{
    return(

         <nav>
            <ul>
               {Private_routes.map((route, index)=>{
                const {path, name} = route
                    return  <li key={index}>
                            <Link to={path}>{name}</Link>
                            </li>
                })}
            </ul>
        </nav>

       
        
    );
}

export default Navbar;



// <div>

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


// <div className="body">
// <header>
// <input type="checkbox" name="" id="chk1" />
// <div className="logo"><h1>Assignment</h1></div>
// <div className="search-box">
// <form action="">
//     <input type="text" name="search" id="srch" placeholder="search" />
//     <button type="submit"><i className="fa fa-search"></i></button> 
// </form>
// </div>
// <ul>
// <li><a href="#">Home</a></li>
// <li><a href="#">Contact</a></li>
// <li><a href="#">About</a></li>
// <li><a href="#">Login</a></li>
// <li>
//     <a href="#"><i className="fab fa-facebook"></i></a>
//     <a href="#"><i className="fab fa-twitter"></i></a>
//     <a href="#"><i className="fab fa-instagram" ></i></a>
// </li>
// </ul>
// <div className="menu">
// <label for="chk1">
//     <i className="fa fa-bars"></i>
// </label>
// </div>
// </header>
// </div>
// </div>


       

