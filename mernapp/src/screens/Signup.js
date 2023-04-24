import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    geolocation: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation
      }),
      mode: 'cors'
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert('Please enter valid credentials');
    } else {
      navigate('/Login');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>

      <div className='signup-container'>

        <div className='signup-form-container'>
          <h1 style={{ textAlign: 'center' }}>Create User</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                name='name'
                value={credentials.name}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                name='email'
                value={credentials.email}
                onChange={onChange}
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
              <div id='emailHelp' className='form-text'>
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={credentials.password}
                onChange={onChange}
                id='exampleInputPassword1'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Address
              </label>
              <input
                type='text'
                className='form-control'
                name='geolocation'
                value={credentials.geolocation}
                onChange={onChange}
                id='exampleInputPassword1'
              />
            </div>
            <button type='submit' className='mt-3  btn btn-success' style={{ marginRight: "12px" }}>
              Sign Up
            </button>
            <Link to='/Login' className='mt-3 btn btn-secondary'>
              Already a User
            </Link>

          </form>
        </div>
      </div>
    </>
  );
}
