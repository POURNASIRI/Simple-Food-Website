import React from 'react'
import img from "./image/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3BmLXM5OS1tbi1hY2FpLXNtb290aGllLWJvd2wtaW4tY29jb251dC13aXRoLXN0cmF3YmVycmllcy1ibHVlYmVycmllcy1ncmFub2xhLXNocmVkZGVkLWNvY29udXQtY2hpYS1zZWVkcy1hbmQtZWRpYmxlLWZsb3dlcnMtMTBfMi5qcGc.webp"
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
