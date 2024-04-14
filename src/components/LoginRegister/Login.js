import React, { useState } from 'react'
import "./LoginStyles.css"
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar-Footer/Navbar';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');

  const handleLogin = () => {
    // Validate credentials
    if (selectedRole === 'Admin') {
      if (username === 'admin' && password === 'adminpassword') {
        navigate('/admin-home'); // Redirect to admin homepage
      } else {
        setError('Invalid username or password');
      }
    } else if (selectedRole === 'user') {
      if (username === 'user' && password === 'userpassword') {
        navigate('/user-home'); // Redirect to user homepage
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('Please select a role');
    }
  };

  
  return (
    <div className='login'>
      <div class="Navbar"><Navbar /></div>
      <div className='login-div'>
        <h2>Login</h2>
        <select onChange={(e) => setSelectedRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="user">User</option>
        </select> <br/>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

    </div>
  )
}

export default Login