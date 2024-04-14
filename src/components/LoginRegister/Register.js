import React, { useState } from 'react';
import "./RegisterStyles.css"
import axios from 'axios';

function Register({ onRegister }) {
  const [user_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState();

  function onRegister(userData) {
    console.log("Inside OnRegister : ",userData);
    const queryString = {
      userName: userData.user_name,
      email: userData.email,
      address: userData.address,
      gender: userData.gender,
      phone: userData.phone,
      dob: userData.dob,
      password: userData.password
    }
    
    axios.post("http://localhost:8765/user-service/register", queryString)
    .then((res)=>{
      if(res.data === "Registration Successful"){
        alert("User Successfully Registerd")
      }
      else{
        alert("Error")
      }
    })
  }
  const handleRegister = () => {
    if (user_name && email && password && gender && dob && phone && age && address) {
      const userData = {
        user_name,
        email,
        password,
        gender,
        dob,
        phone,
        address
      };
      onRegister(userData);
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className='login-container'>
      <div className='register-div login-form'>
        <h2>Register</h2> <br />
        <input
          type="text"
          placeholder="Username"
          value={user_name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender (lower-case)"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>

  );
};

export default Register;
