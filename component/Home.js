import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <section className='home' id='home'>
        <div className='content'>
            <h3>
                Little Lemon<span>cafe</span>
            </h3>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.</p>
            <Link to={'/Booking'}><a className='btn' id='btn'>Reserve a table
            </a></Link>
            </div>
    </section>
    </>
  )
}

export default Home