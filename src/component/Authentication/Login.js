import React from "react";
import "./Login.css";

function Login(){
    return(
        <div className="body">
            <div className="container">
                <h2>Login</h2>
                <form action="">
                    <div className="form-group">
                        <input type="email" required/>
                        <label for="">Email</label>
                    </div>
                    <div className="form-group">
                        <input type="password" required />
                        <label for="">Password</label>
                    </div>

                    <p><input type="checkbox" />Remember Me<a href="#">Forgot Password</a></p>

                    <input id="btn" type="button" value="Login" />

                    <p>Don't have a account?<a href="#">Register</a></p>
                </form>
            </div>

        </div>
    )
};

export default Login;