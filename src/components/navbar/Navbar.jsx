import React from 'react';
import './navbar.css'

export default function Navbar() {
  
  return (
  <>
    <nav className='Navbar'>
        <input type="checkbox" id="check"/>
        <div className="logo">
            broomstick <span className='register-r'>&#9415;</span>
        </div>
        <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
        </label>
        <ul className='nav-link'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Life Skill</a></li>
            <li><a href="#">Hiring</a></li>
            <button className='Contact-btn'><b>Contact Now</b></button>
        </ul>
        </nav>
  </>
  )
}
