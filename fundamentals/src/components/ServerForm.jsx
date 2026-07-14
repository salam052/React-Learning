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
    <div style={styles.container}>
      <h2 style={styles.title}>Create New Server</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Server Name Input */}
        <div style={styles.formGroup}>
          <label htmlFor="serverName" style={styles.label}>Server Name</label>
          <input
            type="text"
            id="serverName"
            name="serverName"
            value={formData.serverName}
            onChange={handleChange}
            placeholder="e.g., DB-PROD-01"
            style={styles.input}
          />
        </div>

        {/* Environment Select Input */}
        <div style={styles.formGroup}>
          <label htmlFor="environment" style={styles.label}>Environment</label>
          <select
            id="environment"
            name="environment"
            value={formData.environment}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="development">Development</option>
            <option value="staging">Staging</option>
            <option value="production">Production</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div style={styles.buttonGroup}>
          <button type="submit" style={{ ...styles.button, ...styles.submitBtn }}>
            Submit
          </button>
          <button type="button" onClick={handleReset} style={{ ...styles.button, ...styles.resetBtn }}>
            Reset
          </button>
        </div>
      </form>

      {/* Conditionally Render Submitted Message */}
      {submittedMessage && (
        <div style={styles.successMessage}>
          {submittedMessage}
        </div>
      )}
    </div>
  );
};

export default ServerForm;

const styles = {
  container: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 0,
    marginBottom: '1.5rem',
    fontSize: '1.25rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#555',
  },
  input: {
    padding: '0.625rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  select: {
    padding: '0.625rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    backgroundColor: '#fff',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '0.5rem',
  },
  button: {
    flex: 1,
    padding: '0.625rem',
    borderRadius: '4px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  submitBtn: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  resetBtn: {
    backgroundColor: '#6c757d',
    color: '#fff',
  },
  successMessage: {
    marginTop: '1.5rem',
    padding: '1rem',
    borderRadius: '4px',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '0.95rem',
  },
};