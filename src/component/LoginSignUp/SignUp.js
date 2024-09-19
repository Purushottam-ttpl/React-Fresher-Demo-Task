import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login, register } from "../folderRedux/sliceNew/newSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


function SignUp(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName]=useState("Pradip")
    const [email, setEmail]=useState("rocky.323@gmail.com");
    const [password, setPassword]=useState("Rockyyy@323");
    const [cnfPassword, setCnfPassword]=useState("Rockyyy@323");
    const [errors, setErrors]=useState({});
    const [role, setRole]= useState();


    function validateName(name) {
        const nameRegx = /^[A-Za-z\s'-]{2,50}$/;
        return nameRegx.test(name);
      }
    

    function validateEmail(email){
        const emailRegx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegx.test(email);
    }
    // console.log("validate email---->",email);


    function validatePassword(password){
        const passwordRegx = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/;
        return passwordRegx.test(password);
    }
    // console.log("validate password---->",password);



    function validateSubmitForm(e){
       console.log("validation of form executed---->",email)

        const validateErrors={};
        if(!role){
            validateErrors.role = "Role is required...!";
        } 


        if(!name){
            validateErrors.name = "Name is required...!";
        }
        else if(!validateName(name)){
            validateErrors.name = "Invalid name...!";
        }


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

        if (!cnfPassword) {
            validateErrors.cnfPassword = "Confirm Password is required...!";
          }
        else if (password !== cnfPassword) {
            validateErrors.cnfPassword = "Passwords does not match...!";
          }



        if(Object.keys(validateErrors).length === 0){
           
            dispatch(register(role));
            alert("no errors");
            toast.success("Register Successful,Login now...!")
            navigate("/"); 

        }
        else{
            setErrors(validateErrors);
            toast.error("Register Failed...!")
        }
        console.log("validate errors---->",validateErrors);
        
    }
    
    // console.log("validate errors---->",errors);

    function handleClick(e){

        e.preventDefault();
        validateSubmitForm();
        console.log("handleclick function executed---->",e)
        // const accessToken = 'eyJhbGciOi';
        
        
    }

    console.log("user role--->",role)
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
                        <div className="form-box register">
                            <form action="#">
                                <h2>Sign Up</h2>
                                <label>User-Role Menu:</label>
                                <select value={role} onChange={(e)=>setRole(e.target.value)}>
                                    <option>Select</option>
                                    <option>Admin</option>
                                    <option>Patient</option>
                                </select>
                                {errors.role && <span className="error" style={{color:"red"}}>{errors.role}</span>}

                                <div className="input-box">
                                    <span className="icon"><i className='bx bxs-user' ></i></span>
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                                    <label>Name</label>
                                    {errors.name && <span className="error" style={{color:"red"}}>{errors.name}</span>}

                                </div>

                                <div className="input-box">
                                    <span className="icon"><i className='bx bxs-envelope' ></i></span>
                                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    <label>Email</label>
                                    {errors.email && <span className="error" style={{color:"red"}}>{errors.email}</span>}
                                </div>
                                <div className="input-box">
                                    <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                    <label>Password</label>
                                    {errors.password && (<span className="error" style={{color:"red"}}>{errors.password}</span>)}
                                </div>
                                <div className="input-box">
                                    <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
                                    <input type="password" value={cnfPassword} onChange={(e)=>setCnfPassword(e.target.value)} />
                                    <label>Confirm Password</label>
                                    {errors.cnfPassword && (<span className="error" style={{color:"red"}}>{errors.cnfPassword}</span>)}
                                </div>

                                <div className="remember-forgot">
                                    <label><input type="checkbox" />I am agree to the terms & conditions</label>
                        
                                </div>

                                <button type="submit>" className="btn" onClick={handleClick}>Sign Up</button>

                                <div className="login-register">
                                    <p>Already have an account? <Link  to="/" className="login-link link">Sign In</Link></p>
                                </div>
                                
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;