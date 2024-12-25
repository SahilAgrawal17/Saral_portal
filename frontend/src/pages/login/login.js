import React from "react";
import FormContainer from "../../components/forms";

// function Login(){
//     return(
//         <div className="container">
//         <h1>Login</h1>
//         <form>
//             <div>
//                 <label htmlFor="email">Email</label>
//                 <input 
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="password">Password</label>
//                 <input 
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 />
//             </div>
//             <button>Login</button>
//             <div>
//                 <span>
//                     Don't have an account?&nbsp;    {/*&nbsp is used for adding non-breaking space */}
//                     <Link to ="../signup">Signup</Link>
//                 </span>
//             </div>
//         </form>
//         {/* <ToastContainer /> */}
//     </div>
//     )
// }

function Login() {
  
  const fields = [
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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <FormContainer
      title="Login"
      fields={fields}
      buttonLabel="Login"
      link={{ text: "Don't have an account?", path: "../signup" }}
      linkText="Signup"
      submitHandler={handleLogin}
    />
  );
}
  

export default Login;
