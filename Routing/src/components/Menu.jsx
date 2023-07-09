
import React from 'react'
import ProductsCard from './ProductsCard'
import { Data } from './ProductsData'


export default function Menu() {
  
  return (
    <div className='products__container'>
        {
            Data.map((items) =>(
              <ProductsCard
              key={items.id}
              img = {items.image}
              title={items.title}
              description={items.description}
              id={items.id}
              />
            ))
        }
        
      </div>
  )
}
