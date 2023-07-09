import { Link, Navigate, useParams } from 'react-router-dom'
import { Data } from './ProductsData'
import React from 'react'
import './ShowResepi.css'
import Btn from './Btn'

let main;
export default function ShowResepi() {
    console.log("hast")
  const params = useParams()
  
  if(params.id <= Data.length){
    main = Data.findIndex((item)=>item.id == params.id);
  }else{
    return <Navigate to="/menu" />
  }
  
  return (
    <div className='resepi-container'>
        <div className='resepi__image'>
          <img src={Data[main].image} alt="" />
        </div>
        <div className='resepi__info'>
          <h1 className='info__title'>
               {Data[main].title}
          </h1>
            <p>Prep:{Data[main].Prep}</p>
            <p>Cook:{Data[main].Cook}</p>
            <p>{Data[main].description}</p>
            {/* <button className='info__btn'><Link className='link' to="/menu">Back to Menu</Link></button>
            <button className='info__btn download'><Link className='link' to="*">Download</Link></button> */}
            <Btn text={"back to menu"} link={"/menu"}/>
            <Btn text={"Downolad"} link={"*"}/>
        </div>
    </div>
  )
}
