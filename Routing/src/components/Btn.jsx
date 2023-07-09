

import React from 'react'
import { Link } from 'react-router-dom'

export default function Btn({text,link}) {
   
  return (
    <div className='btn'>
        <button className="card__btn">
          <Link className="link menu" to={`${link}`}>{text}</Link>
        </button>
    </div>
  )
}
