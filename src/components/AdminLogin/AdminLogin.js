
import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './AdminLoginStyles.css'
// import './../styles.css'
// import GuestNavbar from '../components/GuestNavbar';

function AdminLogin() {

    const LoginUser =()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(username);
        console.log(password);
        axios.post('http://localhost:8696/admin/login', {
                adminId: username,
                password: password
            })
            .then(result => {
                console.log(result.data);
                if (result.data.status === true) { // Check if login is successful
                    alert('Login successful');
                    localStorage.setItem('token', result.data.token);
                    // onLogin();
                    localStorage.setItem("isLoggedIn", true)
                    localStorage.setItem("role", "admin")
                    setUsername('');
                    setPassword('');
                    navigate('/');
                } else {
                    alert('Login failed: ' + result.data.message);
                }
            })
            .catch(error => {
                alert('Login failed alert');
                console.log(error);
            });
    };
    

    return (
        <div className='admin-login'>
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
}
return (
    <div>
      {/* <GuestNavbar/>   */}
      <LoginUser />
    </div>
  );
}

export default AdminLogin;






// import React, { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

  

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // Simple validation example
//       if (!/^\d+$/.test(username)) {
//         console.error('Username must be a number');
//         return;
//       }

//       const response = await fetch('http://localhost:8696/admin/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           adminId: username,
//           password: password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         if (data.status) {
//           localStorage.setItem('token', data.token); // Save the token
//           navigate('/'); // Navigate to the home page after login
//         } else {
//           console.error('Login failed:', data.message);
//         }
//       } else {
//         console.error('HTTP error:', response.status);
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };



// };

// export default Login;
