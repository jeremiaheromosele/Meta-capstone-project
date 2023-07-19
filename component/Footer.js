import React from 'react'
import footerIMG from '../images-cap/footerIMG.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className='footer-section'>
        <div className='container-footer'>
            <div className='footer-img'>
                <img src={footerIMG} alt='footer logo'/>
            </div>
            <div className='sec navigation'>
                <h2>Quick Links</h2>
                <ul>
                    <li> <Link to='/'><a href='#home'>Home</a></Link> </li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li><Link to="Booking" >Reservation</Link></li>
                    <li><a href=''>Online Order</a></li>
                    <li> <Link to="Login">Login</Link></li>
                </ul>
            </div>
      <div className='sec contact'>
        <h2>Contact Us</h2>
        <ul className='info'>
            <li>
                <span className='fas'><i class="fas fa-map-marker-alt"></i></span>
                <p>647 Linda Sreet <br/>
                Chiago, IL 194060,<br/>USA</p>
            </li>
            <li>
                <span className='fas'><i className="fas fa-phone-alt"></i></span>
                <p>+1 234 567 8900<br/>
                +1 234 567 8900</p>
            </li>
            <li>
                <span className='fas'><i className="fas fa-envelope"></i></span>
                <p><a href='#'>littlelemoncafe@gmail.com</a></p>
            </li>
        </ul>
      </div>
      <div className='sec socials'>
        <h2>Connect With Us</h2>
        <ul className='soc'>
            <li><a href='#'><i class="fab fa-facebook"></i></a></li>
            <li><a href='#'><i class="fab fa-instagram-square"></i></a></li>
            <li><a href='#'><i class="fab fa-twitter"></i></a></li>
            <li><a href='#'><i class="fab fa-tiktok"></i></a></li>
        </ul>
      </div>
        </div>
        <p className='copyright'>
            &copy; {new Date().getFullYear()} All rights reserved
        </p>

    </section>
  )
}

export default Footer