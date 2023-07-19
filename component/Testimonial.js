import React from 'react'
import pic1 from '../images-cap/pic-1.png'
import pic2 from '../images-cap/pic-2.png'
import pic3 from '../images-cap/pic-3.png'
import pic4 from '../images-cap/pic4.jpeg'
import qouteImg from '../images-cap/quote-img.png'

const Testimonial = () => {
  const menubar=[
    {id:1,name:"John Doe",img:pic1},
    {"id":2,"name":"Jane Smith","img":pic2},
    {"id":3,"name":"David Lee","img":pic3},
    {"id":4,"name":"Mike Johnson","img":pic4}
  ]
  return (
    <>
    <section className="testimonials" id="testimonials">
      <div >
      <h2  style={{textAlign: "center",color:"white",fontSize:"3rem"}}>Testimonial<span>s</span></h2>
        <div className='container'>
          {menubar.map((items) =>(
            <div className='card' key={items.id}>
              <div className='quote'><img src={qouteImg} className='quote-img'/></div>
              <div className='img-info' >
                <img src={items.img} alt='' className='img-Q'/>
                </div>
              <div className='info'>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
                </p>
                <span>{items.name}</span>
              </div>
              <div className='stars'>
              <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

          ))}
      </div>
      </div>
      </section>
      </>
  )
}

export default Testimonial;