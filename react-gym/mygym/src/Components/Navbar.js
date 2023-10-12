import React from 'react'
import '../Styling/navbar.css'; 
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div class="topnav" id="myTopnav">
  
  <Link  to="/">Home</Link>
  <Link  to="/About">About</Link>
  <Link  to="/Contact">Contact</Link>
  <Link  to="/Pricing">Plans</Link>
  <Link  to="/Gallery">Gallery</Link>
  

  <a className='log' href="">Login</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
    </div>
  )
}

export default Navbar
