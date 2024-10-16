import React, { useEffect, useState } from "react";
import "./LogSign.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../folderRedux/sliceNew/newSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LogSign(){    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let Role = localStorage.getItem("UserType");

    const [email, setEmail]=useState("rocky.323@gmail.com");
    const [password, setPassword]=useState("Rockyyy@323");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors]=useState({});

    function validateEmail(email){
        const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegx.test(email);
    }

    function validatePassword(password){
        const passwordRegx = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/;
        return passwordRegx.test(password);
    }


    function validateSubmitForm(e){
       console.log("validation of form executed---->",email)

        const validateErrors={};

        if(!email){
            validateErrors.email = "Email is required...!";
        }
        else if(!validateEmail(email)){
            validateErrors.email = "Invalid email format...!";
        }


        if(!password){
            validateErrors.password = "Password is mandatory...!";
        }
        else if(!validatePassword(password)){
            validateErrors.password = "Password must be at least 8 characters, contain one uppercase letter, and one special character...!"
        }



        if(Object.keys(validateErrors).length === 0){
            
            if(Role){
                dispatch(login("Login123"));
                // alert("no errors");
                toast.success("Login Successful...!")

            }
            else{
                navigate("/unAuth");
            }
             
        }
        else{
            setErrors(validateErrors);
            toast.error("Login Failed...!")
        }
        console.log("validate errors---->",validateErrors);
        
    }
    
    function handleClick(e){

        e.preventDefault();
        validateSubmitForm();
        console.log("handleclick function executed---->",e)        
    }

    

    return(
        <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            <div className="body">
                {/* <div className="header">
                    <nav className="navbar">
                        <a to="#">Home</a>
                        <a to="#">About</a>
                        <a to="#">Contact</a>
                        <a to="#">Services</a>
                    </nav>
                    <form action="#" className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i class='bx bx-search'></i></button>
                    </form>
                </div> */}

                <div className="background"></div>

                <div className="container">
                    <div className="content">
                        <h2 className="logo"><i className='bx bxl-firebase'></i>Assignment</h2>

                        <div className="text-sci">
                            <h2>Welcome...!<br/><span>To Our New Website...</span></h2>

                            <p>The future belongs to those who believe in the beauty of their dreams..! This quote is by Pradip Jagdhane. </p>
                            
                            <div className="social-icons">
                                <Link to="#" className="link"><i className='bx bxl-linkedin' ></i></Link>
                                <Link to="#" className="link"><i className='bx bxl-instagram' ></i></Link>
                                <Link to="#" className="link"><i className='bx bxl-facebook' ></i></Link>
                                <Link to="#" className="link"><i className='bx bxl-twitter' ></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="logreg-box">
                        <div className="form-box login">
                            <form>
                                <h2>Sign In</h2>

                                <div className="input-box">
                                    <span className="icon"><i class='bx bxs-envelope' ></i></span>
                                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    <label>Email</label>
                                    {errors.email && <span className="error" style={{color:"red"}}>{errors.email}</span>}
                                </div>

                                <div className="input-box">
                                    <span className="icon" onClick={() => setShowPassword(!showPassword)} >
                                        <i className={showPassword ? 'bx bx-lock-open' : 'bx bx-lock'}></i>
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}/>
                                    <label>Password</label>
                                    {errors.password && <span className="error" style={{ color: "red"}}>{errors.password}</span>}
                                </div>

                                <div className="remember-forgot">
                                    <label><input type="checkbox" />Remember me</label>
                                    <Link to="#" className="link">Forgot Password?</Link>
                                </div>

                                <button type="submit" className="btn" onClick={handleClick}>Sign In</button>

                                <div className="login-register">
                                    <p>Don't have an account? <Link to="/register" className="register-link link">Sign Up</Link></p>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogSign;