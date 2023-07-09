import React from 'react'
import './ProductsCard.css'
import Btn from './Btn'
import { Link } from 'react-router-dom'


export default function ProductsCard({img,title,description,id}) {
  
  return (
    <div className='card-wrapper'>
        <div className='card__image'>
        <img src={img} alt="" />
        </div>
        <div className='card__info'>
        <h1 className='card__title'>{title}</h1>
        <p className='card__description'>{description}</p>
        </div>
        <Btn text={"Read More"} link={id}/>
    </div>
  )
}
