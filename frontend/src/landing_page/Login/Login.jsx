import React, { useState } from 'react';
import axios from 'axios';

// Assume your dashboard runs on a different port or URL
const DASHBOARD_URL = 'http://localhost:3000'; // <-- CHANGE THIS to your dashboard's actual URL

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const apiUrl = `${import.meta.env.VITE_API_URL}/login`;
      const response = await axios.post(apiUrl, { username, password });

      // 1. Save the token from the backend
      localStorage.setItem('token', response.data.token);

      // 2. Show a success message
      setMessage('Login successful! Redirecting to your dashboard...');

      // 3. Redirect to the dashboard page after 1.5 seconds
      setTimeout(() => {
        window.location.href = DASHBOARD_URL;
      }, 1500);

    } catch (error) {
      setMessage(error.response?.data || 'Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Welcome back</h2>
      <p>Please enter your credentials to log in.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Log In</button>
      </form>
      {message && <p className="mt-3 text-center">{message}</p>}
    </div>
  );
};

export default Login;