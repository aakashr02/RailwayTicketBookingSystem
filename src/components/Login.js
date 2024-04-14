import React, { useState } from 'react'
import axios from 'axios'
import "./LoginStyles.css"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import UserHome from './UserLogin/UserHome';
import Navbar from './Navbar-Footer/Navbar';
axios.defaults.withCredentials = true;
function Login() {


    const [user, setUser] = useState({ email: "", password: "" })
    const [msg, setMsg] = useState("")
    const [selectedRole, setSelectedRole] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function login(evt) {
        evt.preventDefault();
        console.log(user);
        axios.post("http://localhost:8765/user-service/login", user)
            .then((res) => {
                if (selectedRole === 'user') {
                    if (res.status === 200) {
                        setMsg("DATA : " + res.data + "\nHEADER : " + res.headers);
                        // localStorage.setItem('token', res.data.token);
                        localStorage.setItem('isLoggedIn', true);
                        localStorage.setItem('role', 'user');
                        navigate('/welcome-user');
                    }
                }
                console.log(res.data)
                console.log(res.headers)
                console.log(res.status)
                console.log(res.headers.has("JSESSIONID"))
            })
            .catch((res) => {
                setError("Invalid Username or Password")
                console.log(res)
            })

    }

    function getLoginUser(evt) {
        evt.preventDefault();
        axios.get("http://localhost:8765/user-service/")
            .then((res) => {
                setMsg("DATA : " + res.data + "\nHEADER : " + res.headers);
                console.log(msg);
            })
    }

    function adminLogin() {
        navigate('/adminLogin')
    }



    return (
        <div className='login'>
            <div className='login-div'>
                <h2>LOGIN</h2>
                <h3>
                    <form>
                        <select onChange={(e) => setSelectedRole(e.target.value)}>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select> <br />
                        Email : <input type="email" value={user.email} onChange={(evt) => setUser({ ...user, email: evt.target.value })}></input><br></br>
                        Password : <input type="password" value={user.password} onChange={(evt) => setUser({ ...user, password: evt.target.value })}></input><br></br>
                        <button onClick={login}>LOGIN</button>
                        <button onClick={getLoginUser}>GET LOGGED IN USER</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                    <button onClick={adminLogin}>Login as Admin</button>
                </h3>
            </div>

        </div>
    )
}

export default Login