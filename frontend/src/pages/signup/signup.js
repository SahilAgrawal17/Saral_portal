import React from "react";
import FormContainer from "../../components/forms";
// import { ToastContainer } from "react-toastify";

// function Signup(){
//     return(
//         <div className="container">
//             <h1>Signup</h1>
//             <form>
//                 <div>
//                     <label htmlFor="name">Name</label>
//                     <input 
//                     type="text"
//                     name="name"
//                     // autoFocus    //Focuses automatically on this input when this component is rendered
//                     placeholder="Enter your name"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input 
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input 
//                     type="password"
//                     name="password"
//                     placeholder="Enter your password"
//                     />
//                 </div>
//                 <button>Signup</button>
//                 <div>
//                     <span>
//                         Already have an account?&nbsp;     {/*&nbsp is used for adding non-breaking space */}
//                         <Link to ="..\login">Login</Link>
//                     </span>
//                 </div>
//             </form>
//             {/* <ToastContainer /> */}
//         </div>
//     )
// }

function Signup() {
    const fields = [
        {
            label: "Name",
            type: "string",
            name: "name",
            placeholder: "Enter your name",
            required: true,
        },
        {
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "Enter your email",
            required: true,
        },
        {
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "Enter your password",
            required: true,
        },
    ];
  
    const handleSignup = (e) => {
      e.preventDefault();
      console.log("Signup form submitted");
    };
  
    return (
      <FormContainer
        title="Signup"
        fields={fields}
        buttonLabel="Signup"
        link={{ text: "Already have an account?", path: "../login" }}
        linkText="Login"
        submitHandler={handleSignup}
      />
    );
  }

export default Signup;
