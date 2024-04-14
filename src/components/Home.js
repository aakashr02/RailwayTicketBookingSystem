import React from 'react'
import "./HomeStyles.css"
import train from "../images/train.jpg"
import Navbar from './Navbar-Footer/Navbar';

function Home() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <div className='home'>
      <div className='home-content'>
        <div className='content'>
          <h1>Welcome To IRTBS.</h1>
          <br />
          <p>IRTBS is an online platform where youF can search for trains, book tickets, check the train availability status and much more!!</p>
        </div>
        <img src={train} alt='train' />
      </div>
    </div>
  )
}

export default Home