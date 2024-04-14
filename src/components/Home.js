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
          <p>Explore, Book, Travel - It's That Easy!

            Welcome to Railway Ticket Booking System, where your journey begins with simplicity and ends with unforgettable experiences.

            <span><h3>Explore: </h3></span> Discover a world of destinations with our extensive network of train routes.

            <span><h3>Book: </h3></span> Secure your tickets effortlessly with our intuitive platform.

            <span><h3>Travel: </h3></span> Enjoy a smooth and memorable journey, whether solo, with family, or for business.

            Start your adventure today with Railway Ticket Booking System!</p>
        </div>
        <div className='Image'>
          <img src={train} alt='train' />
        </div>
      </div>
    </div>
  )
}

export default Home