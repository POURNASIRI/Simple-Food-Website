import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitch, FaTwitter} from 'react-icons/fa'
import './Footer.css'


export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='icons'>
            <NavLink className="icon"><FaInstagram/></NavLink>
            <NavLink className="icon"><FaTwitter/></NavLink>
            <NavLink className="icon"><FaFacebookSquare/></NavLink>
            <NavLink className="icon"><FaLinkedin/></NavLink>
        </div>
        <p className='footer__text'> <span>&copy;</span> 2023 HealthyFood.com</p>

    </div>
  )
}
