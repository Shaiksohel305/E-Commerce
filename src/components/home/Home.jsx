import axios from 'axios'
import './home.css'
import { useState } from 'react';

export default function Home() {
  const[state,setstate]=useState([])
  var sendrequest=()=>{
   const pobj= axios.get("https://fakestoreapi.com/products");
    pobj.then((res)=>{
      setstate(res.data).catch((error)=>{
        setstate(error)
      })
    })
  }
  return (
    <div style={{margin:"13px 23px"}}>
      <h2>Products Details</h2><br /><br />
      <div className='imgbox'>
      </div>
      <button onClick={sendrequest} style={{padding:"9px 31px"}}>Show Product details</button>
      <div className='cardcontainer'>
        {
        state.map((element) => {
          return <div className='card'>
            <img style={{ height: "182px", width: "100%", backgroundColor: "green" }} src={element.image} />
            <h2>{element.title}</h2>
            <p>{element.category}</p>
            <p>{element.price}</p>
            <p>{element.rating.rate}</p>
            <button style={{ backgroundColor: "green" }}>Product details</button>
            <button style={{ backgroundColor: 'blue' }}>Add Cart</button></div>
        })}

    </div>
      </div>
      )}