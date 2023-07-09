 import React from 'react'
 import Img from './image/Good-food-logo-design-on-transparent-background-PNG.png'
 import "./Header.css"
 import { Link, NavLink } from 'react-router-dom'
 export default function Header() {
   return (
    <div className='header-container'>
     <div className='header-wrapper'>
        <div className='header__image'>
            <img src={Img} alt="" />
        </div>
        <ul className='header__items'>
            <li className='item'><NavLink className="link header" to="/">Home</NavLink></li>
            <li className='item'><NavLink className="link header" to="/menu">Menu</NavLink></li>
            <li className='item'><NavLink className="link header" to="/about">About</NavLink></li>
            <li className='item'><NavLink className="link header" to="/contact">Contact</NavLink></li>
        </ul>
     </div>
    </div>
   )
 }
 