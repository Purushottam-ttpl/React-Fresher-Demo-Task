import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Private_routes } from "../Routes/Constant";
import { logout } from "../folderRedux/sliceNew/newSlice";
import { useDispatch } from "react-redux";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


const Navbar =()=>{
    const [open, setOpen] = useState(false);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRole = localStorage.getItem("UserType");
    console.log("role from navbar--->",userRole);


    const handleLogout=(e)=>{
        setOpen(true);

        // dispatch(logout());

        // navigate("/");

        // localStorage.removeItem("UserType");
       
        console.log("button clicked---->",e);
    };

    const handleConfirmLogout = () => {
        setOpen(false);
        dispatch(logout());
        // Navigate to login or home after logout
        // navigate("/");
        // localStorage.removeItem("UserType");
        // console.log("Logged out");
      };
    
      const handleClose = () => {
        setOpen(false); // Close dialog without logging out
      };

    return(

        <div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


        {/* <div className="body"> */}
        <header>
        <input type="checkbox" name="" id="chk1" />
        <div className="logo"><h1>Assignment</h1></div>
        <div className="search-box">
        <form action="">
            <input type="text" name="search" id="srch" placeholder="search" />
            <button type="submit"><i className="fa fa-search"></i></button> 
        </form>
        </div>
        <ul>
        {/* {userRole === 'Admin' ? (
            <li>
                 <Link to="/contact" className="Link">Contact</Link>
                 <Link to="/sidebar" className="Link">Sidebar</Link>
            </li>
            ) : userRole === 'Patient' ? (
                <li>
                <Link to="/about" className="Link">About</Link>
               </li>
            ) : userRole &&(
                <li>
                <Link to="/home" className="Link">Home</Link>
               </li>
        )} */}

        
         <li>
         {userRole === "Admin" && (
                <>
                     <Link to="/contact" className="Link">Contact</Link>
                     <Link to="/dashboard" className="Link">Dashboard</Link>
                </>
            )}

            {userRole === "Patient" && (
                <>
                 <Link to="/about" className="Link">About</Link>
                </>
            )}

            {userRole && (
                <>
                 <Link to="/home" className="Link">Home</Link>
                </>
            )}
        </li>
           

        {/* {Private_routes.map((route, index)=>{
            const {path, name} = route;
                return  <li key={index}>
                <Link to={path} className="Link">{name}</Link>
                </li>
        })} */}

        <li>
            <Link to="#" className="Link"><i className="fab fa-facebook"></i></Link>
            <Link to="#" className="Link"><i className="fab fa-twitter"></i></Link>
            <Link to="#" className="Link"><i className="fab fa-instagram" ></i></Link>
           
        </li>

        <button  variant="contained" color="secondary" onClick={handleLogout}><i className="fa-solid fa-circle-user"></i></button>

        </ul>
        <div className="menu">
        <label for="chk1">
            <i className="fa fa-bars"></i>
        </label>
        </div>
        </header>
        {/* </div> */}

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to logout?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmLogout} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

        </div>


       
        
    );
}

export default Navbar;

            




       

