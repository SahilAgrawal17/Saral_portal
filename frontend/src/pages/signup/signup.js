import React from "react";
import AuthForm from "../../components/authform";

function Signup() {
  const fields = [
    {
      label: "Name",
      type: "text",
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

  const submitHandler = {
    url: "/auth/signup",  // Update this to include the full path
    redirectPath: "/login",
  };

  return (
    <AuthForm
      title="Signup"
      fields={fields}
      submitHandler={submitHandler}
      linkText="Login"
      linkPath="/login"
      linkTextDescription="Already have an account?"
    />
  );
}

export default Signup;