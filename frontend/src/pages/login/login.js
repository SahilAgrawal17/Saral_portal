import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="container">
        <h1>Login</h1>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                name="email"
                placeholder="Enter your email"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                name="password"
                placeholder="Enter your password"
                />
            </div>
            <button>Login</button>
            <div>
                <span>
                <Link to ="../signup">Create Account</Link>
                </span>
            </div>
        </form>
        {/* <ToastContainer /> */}
    </div>
    )
}

export default Login;
