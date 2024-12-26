import React from "react";
import AuthForm from "../../components/authform"; // Import the new parent component

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

  const submitHandler = {
    url: "auth/login", // API endpoint for login
    redirectPath: "/home",  // Redirect to home after successful login
  };

  return (
    <AuthForm
  title="Login"
  fields={fields}
  submitHandler={submitHandler}
  linkText="Sign up"  // This is the clickable link
  linkPath="/signup"
  linkTextDescription="Don't have an account?"  // This is the description
/>

  );
}

export default Login;
