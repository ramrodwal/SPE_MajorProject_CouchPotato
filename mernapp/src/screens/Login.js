import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    //this is a synthetic event i.e preventDefault
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
    // const response = await fetch("http://192.168.49.2:30189/api/loginuser", {
      method: 'POST',
      //specified the header in thunderclient
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      //json data ko stringify krke bhejte hai kyuki yahi tarika hota hai
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("enter valid credentials")
    }
    else{
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }

  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
        </form>

      </div>
    </div>
  )
}