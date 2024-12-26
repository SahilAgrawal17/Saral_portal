import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/api';  // Use axios instance from api.js
import FormContainer from "./forms"

function AuthForm({ title, fields, submitHandler, linkText, linkPath, linkTextDescription }) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await axios.post(submitHandler.url, formData);  // Dynamic API endpoint
      if (response.data.success) {
        alert(response.data.message); // Display success message
        navigate(submitHandler.redirectPath);  // Redirect after success
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="container">
      <FormContainer
        title={title}
        fields={fields.map(field => ({
          ...field,
          value: formData[field.name] || '',
          onChange: handleChange,
        }))}
        buttonLabel={title}
        link={{ text: linkTextDescription, path: linkPath }}
        linkText={linkText}
        submitHandler={handleSubmit}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AuthForm;
