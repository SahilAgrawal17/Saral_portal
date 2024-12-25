import React from "react";
import { Link } from "react-router-dom";

function FormContainer({ title, fields, buttonLabel, link, linkText, submitHandler }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <form onSubmit={submitHandler}>
        {fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
            />
          </div>
        ))}
        <button type="submit">{buttonLabel}</button>
        {link && (
          <div>
            <span>
              {link.text}&nbsp;
              <Link to={link.path}>{linkText}</Link>
            </span>
          </div>
        )}
      </form>
    </div>
  );
}

export default FormContainer