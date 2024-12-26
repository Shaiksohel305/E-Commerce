import './home.css'
import Products from '../Products/Products'
import { useState } from 'react'

export default function Home() {  
  return (
    <div className='cardcontainer'>
      {
        Products.map((element) => {
          return <div className='card'>
              <img style={{height:"182px",width:"100%", backgroundColor:"green"}} src={element.image} />
              <h2>{element.title}</h2>
              <p>{element.category}</p>
              <p>{element.price}</p>
              <p>{element.rating.rate}</p>
              <button style={{backgroundColor:"green"}}>Product details</button>
              <button style={{backgroundColor:'blue'}}>Add Cart</button>
          </div>
        })
      }
    </div>
  )
}
