import React from 'react'
import greeksalad from '../images-cap/greeksalad.jpg'
import bruchetta1 from '../images-cap/bruchetta1.jpg'
import lemond1 from '../images-cap/lemond1.jpg'
import pasta from '../images-cap/pasta.jpg'




const menu = [{
    img:greeksalad,
    title: "Greek salad",
    price: "$12.99",
    description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
},
{ img:bruchetta1,
    title:"Bruschetta",
    price: "$5.99",
    description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
},
{
    img:lemond1,
    title:"Lemon Dessert",
    price: "$5.00",
    description:"This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
},
{
    img:pasta,
    title:"Pasta",
    price:"$4.89",
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}
];

const Menu = () => {
  return (
    <>
    <section className='menu' id='menu'>
        <div className='head-content'>
            <h1><span>S</span>pecial<span>s</span></h1>
            <a href='#' className='btn1'> Online menu </a>
        </div>
        <div className='box-container'>
            {menu.map((item) =>(
                <div className='box' key={item.title}>
                    <img className='box-img' src={item.img} alt="food" />
                    <div className='letter'>
                        <h2 className='tittle'>{item.title}</h2>
                        <p>{item.price}</p>
                    </div>
                    <p className='description'>
                        {item.description}
                </p>
                <a href="#" className='link'>order a delivery</a>
                </div>))};
        </div>
    </section>
    </>
  )
}

export default Menu;