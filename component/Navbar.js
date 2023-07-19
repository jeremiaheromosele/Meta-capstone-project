import { useRef } from 'react'
import React from 'react'
import logo1 from '../images-cap/logo1.png'
import { Link } from "react-router-dom"

const Navbar = () => {
  const navbarRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle('active');
  };
  return (
    <>
    <header className='header'>
      <a href='#' className='logo'>
        <img src={logo1} alt='' width={200} />
      </a>
      <nav className='navbar' ref={navbarRef}>
        <Link to='/'><a href='#home'>Home</a></Link>
        <a href='#About'>About</a>
        <a href='#menu'>Menu</a>
        <Link to="Booking" >Reservation</Link>
        <a href='#orderonline'>Order online</a>
        <Link to="Login">Login</Link>
      </nav>
      <div className='icons'>
        <div className="fas fa-bars" id='menu-btn' onClick={navbarHandler}></div>
        </div>
    </header>

    </>
  )
}

export default Navbar;

