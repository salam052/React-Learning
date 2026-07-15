import React, { useState } from 'react';

const initialFormState = {
  serverName: '',
  environment: 'development',
};

const ServerForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.serverName.trim()) {
      alert('Please enter a server name.');
      return;
    }

    const formattedEnv = formData.environment.charAt(0).toUpperCase() + formData.environment.slice(1);
    setSubmittedMessage(`Server ${formData.serverName} submitted for ${formattedEnv}`);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(initialFormState);
    setSubmittedMessage(''); 
  };

  return (
    <div className="container">
      <h2 className="title">Create New Server</h2>
      
      <form onSubmit={handleSubmit} className="form">
        {/* Server Name Input */}
        <div className="formGroup">
          <label htmlFor="serverName" className="label">Server Name</label>
          <input
            type="text"
            id="serverName"
            name="serverName"
            value={formData.serverName}
            onChange={handleChange}
            placeholder="e.g., DB-PROD-01"
            className="input"
          />
        </div>

        {/* Environment Select Input */}
        <div className="formGroup">
          <label htmlFor="environment" className="label">Environment</label>
          <select
            id="environment"
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            className="select"
          >
            <option value="development">Development</option>
            <option value="staging">Staging</option>
            <option value="production">Production</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="buttonGroup">
          <button type="submit" className="button submitBtn" >
            Submit
          </button>
          <button type="button" onClick={handleReset} className="button resetBtn">
            Reset
          </button>
        </div>
      </form>

      {/* Conditionally Render Submitted Message */}
      {submittedMessage && (
        <div className="successMessage">
          {submittedMessage}
        </div>
      )}
    </div>
  );
};

export default ServerForm;
