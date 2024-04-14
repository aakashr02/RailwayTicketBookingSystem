import React from 'react'
import { Link } from 'react-router-dom';

function NavbarUser({ setIsLoggedIn }) {
  return (
    <nav>
      <ul>
        <li><Link to="/user-home">User Home</Link></li>
        <li><Link to="/book-ticket">Book Ticket</Link></li>
        <li><Link to="/logout" onClick={() => setIsLoggedIn(false)}>Logout</Link></li>
      </ul>
    </nav>
  );
}

export default NavbarUser