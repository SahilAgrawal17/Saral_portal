import React from "react";
import { Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

function Signup(){
    return(
        <div className="container">
            <h1>Signup</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text"
                    name="name"
                    // autoFocus    //Focuses automatically on this input when this component is rendered
                    placeholder="Enter your name"
                    />
                </div>
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
                <button>Signup</button>
                <div>
                    <span>
                        <Link to ="..\login">Already have an account?</Link>
                    </span>
                </div>
            </form>
            {/* <ToastContainer /> */}
        </div>
    )
}

export default Signup;
