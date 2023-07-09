import React from 'react'
import img from "./image/Most_Healthy_Food_Choices_for_Daily_Consumption_1980x.webp"
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home-wrapper'>
        <div className='home'>
        <div className='home__detail'>
            <h1>Healthy Food </h1>
            <p>Here we teach you how to prepare healthy food </p>
            <button><Link className='link home' to="/menu">Order Now</Link></button>
        </div>
        <div className="home__image">
            <img src={img} alt="" />
        </div>
        </div>

    </div>
  )
}
