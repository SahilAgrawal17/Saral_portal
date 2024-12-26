import React from "react";
import { Link } from "react-router-dom";

function FormContainer({ title, fields, buttonLabel, link, linkText, submitHandler, error }) {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">{title}</h1>
      
      {error && (
        <div className="text-red-500 text-sm mb-4 p-2 border border-red-500 bg-red-100 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={submitHandler} className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label htmlFor={field.name} className="text-sm font-medium text-gray-600 mb-1">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              value={field.value}         
              onChange={field.onChange}   
              className={`border ${field.error ? 'border-red-500' : 'border-gray-300'} 
                rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 
                focus:ring-indigo-500`}
            />
            {field.error && (
              <span className="text-red-500 text-xs mt-1">{field.error}</span>
            )}
          </div>
        ))}
        
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md 
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {buttonLabel}
        </button>
        
        {link && (
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">{link.text}&nbsp;</span>
            <Link to={link.path} className="text-sm text-indigo-600 hover:underline">
              {linkText}
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default FormContainer;