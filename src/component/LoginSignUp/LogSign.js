import React from "react";
import "./LogSign.css";

function LogSign(){
    return(
        <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

            <div className="body">
                <div className="header">
                    <nav className="navbar">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Services</a>
                    </nav>
                    <form action="#" className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i class='bx bx-search'></i></button>
                    </form>
                </div>

                <div className="background"></div>

                <div className="container">
                    <div className="content">
                        <h2 className="logo"><i class='bx bxl-firebase'></i>Assignment</h2>

                        <div className="text-sci">
                            <h2>Welcome...!<br/><span>To Our New Website...</span></h2>

                            <p>The future belongs to those who believe in the beauty of their dreams: This quote is by Eleanor Roosevelt. </p>
                            
                            <div className="social-icons">
                                <a href="#"><i class='bx bxl-linkedin' ></i></a>
                                <a href="#"><i class='bx bxl-instagram' ></i></a>
                                <a href="#"><i class='bx bxl-facebook' ></i></a>
                                <a href="#"><i class='bx bxl-twitter' ></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="logreg-box">
                        <div className="form-box login">
                            <form action="#">
                                <h2>Sign In</h2>

                                <div className="input-box">
                                    <span className="icon"><i class='bx bxs-envelope' ></i></span>
                                    <input type="email" required />
                                    <label>Email</label>
                                </div>
                                <div className="input-box">
                                    <span className="icon"><i class='bx bxs-lock-alt' ></i></span>
                                    <input type="password" required />
                                    <label>Password</label>
                                </div>

                                <div className="remember-forgot">
                                    <label><input type="checkbox" />Remember me</label>
                                    <a href="#">Forgot Password?</a>
                                </div>

                                <button type="submit>" className="btn">Sign In</button>

                                <div className="login-register">
                                    <p>Don't have account? <a  href="#" className="register-link">Sign Up</a></p>
                                </div>
                                
                            </form>
                        </div>

                        <div className="form-box register">
                            <form action="#">
                                <h2>Sign Up</h2>

                                <div className="input-box">
                                    <span className="icon"><i class='bx bxs-user' ></i></span>
                                    <input type="text" required />
                                    <label>Name</label>
                                </div>

                                <div className="input-box">
                                    <span className="icon"><i class='bx bxs-envelope' ></i></span>
                                    <input type="email" required />
                                    <label>Email</label>
                                </div>
                                <div className="input-box">
                                    <span className="icon"><i class='bx bxs-lock-alt' ></i></span>
                                    <input type="password" required />
                                    <label>Password</label>
                                </div>

                                <div className="remember-forgot">
                                    <label><input type="checkbox" />I am agree to the terms & conditions</label>
                        
                                </div>

                                <button type="submit>" className="btn">Sign Up</button>

                                <div className="login-register">
                                    <p>Already have account? <a  href="#" className="login-link">Sign In</a></p>
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