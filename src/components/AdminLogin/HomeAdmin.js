// Home.js

import React, { useEffect } from 'react';

import Navbar from './Navbar';

// import ScheduleTrain from './ScheduleTrain';
import { useNavigate } from 'react-router-dom';

function HomeAdmin() {
  const navigate=useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  },[])
  return (
    <div>
      
     
      {/* <Navbar/> */}
      <h2>home</h2>
    </div>
  );
}

export default HomeAdmin;
