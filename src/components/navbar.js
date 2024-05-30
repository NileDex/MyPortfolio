import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div id='myLinks' className="navbar-links">
        <p className='nav-info'>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><p>Home</p></Link>
        </p>
        <p className='nav-info'>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}><p>About</p></Link>
        </p>
        <p className='nav-info'>
          <Link to="/project" style={{ textDecoration: 'none', color: 'inherit' }}><p>Projects</p></Link>
        </p>
        <p className='nav-info'>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}><p>Contact</p></Link>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
