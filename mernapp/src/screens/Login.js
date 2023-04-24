import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://192.168.49.2:30189/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert('Invalid credentials. Please try again.');
    } else {
      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('authToken', json.authToken);
      console.log(localStorage.getItem('authToken'));
      navigate('/');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: "url('https://img.freepik.com/premium-photo/paper-bag-with-healthy-food-healthy-food-background-supermarket-food-concept-shopping-supermarket-home-delivery_167368-269.jpg?w=2000')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <form onSubmit={handleSubmit} style={{
        width: '350px',
        padding: '30px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        background: '#ffffff',
      }}>
        <h1 style={{
          marginBottom: '20px',
          textAlign: 'center',
          color: '#333333',
          fontSize: '24px',
        }}>Log In</h1>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{
            display: 'block',
            marginBottom: '5px',
            color: '#666666',
            fontSize: '14px',
          }}>Email Address</label>
          <input
            type="email"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #cccccc',
              borderRadius: '5px',
              fontSize: '14px',
            }}
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{
            display: 'block',
            marginBottom: '5px',
            color: '#666666',
            fontSize: '14px',
          }}>Password</label>
          <input
            type="password"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #cccccc',
              borderRadius: '5px',
              fontSize: '14px',
            }}
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          background: '#4CAF50',
          color: '#ffffff',
          fontSize: '16px',
          cursor: 'pointer',
        }}>Log In</button>
        <p style={{
          marginTop: '10px',
          textAlign: 'center',
          color: '#666666',
          fontSize: '14px',
        }}>
          Don't have an account? <Link to="/createuser" style={{ color: '#4CAF50', textDecoration: 'none' }}>Sign up here</Link>
        </p>
      </form>
    </div>
  );
}
