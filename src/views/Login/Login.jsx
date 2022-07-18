import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ loginUser, setLoginUser }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.email && user.password)
      axios.post('http://localhost:5000/users/login', user)
        .then(res => {
          console.log(res.data)
          console.log(user)
          setLoginUser(res.data.user)
          console.log(loginUser)
          navigate('/home')
        })
    }

  return (
    <div>
     <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input type="text" id="email" 
          onChange={handleChange}
          value={user.email}
          required/>

        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id="password" 
          onChange={handleChange} 
          value={user.password}
          required/>

        <button type="submit">Login</button>
      </form>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/'>Back</Link>
      {/* <button
      onClick={() => navigate(-1)}>Back</button> */}
    </div>
  )
}

export default Login