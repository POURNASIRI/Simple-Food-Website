import React from 'react'
import './About.css'
import img from './image/pexels-photo-155555.jpeg'

export default function About() {
  return (
    <div className='about-wrapper'>
        <div className='about__image'>
            <img src={img} alt="" />
        </div>
        <div className='about__detail'>
        <h1 className='about__title'>About Us</h1>
        <p className='about__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, molestiae dolores saepe hic sapiente ipsum ducimus sunt voluptate, provident perspiciatis maiores. Eum fugit amet accusamus ad corporis, sequi perferendis explicabo iure. Minus repudiandae numquam nobis eius omnis amet voluptatum, a assumenda, odio expedita eveniet rem et qui? Esse, laudantium in?</p>
        </div>
    </div>
  )
}
