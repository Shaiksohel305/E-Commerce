import axios from 'axios'
import "./addcart.css"
import {useEffect, useState} from 'react'
export default function Addcart() {
  let [cart,setcart]=useState([])
useEffect((()=>{
  getcart();
}),[]);
const deleteproduct=(id)=>{
  axios.delete(`http://localhost:3000/addToCart/${id}`).then((res)=>{
    getcart()
  }).catch(()=>{
    alert("fail while delete the product")
  })
};
  const getcart=()=>{
    axios.get("http://localhost:3000/addToCart").then((res)=>{
      setcart(res.data)
    }).catch((error)=>{
      alert("fail to add to cart")
  
    })
  }
 
  return (
    <div className='cartmain'>
        <h2 style={{color:"red",textAlign:"center", marginTop:"77px"}}>AddCart Details</h2>
       {
        cart.length > 0 ?  <div className='cart'>{
          cart.map((cartelement)=>{
            return <div className='cartdata'>
              <img src={cartelement.image} height={"190px"} width={"260px"}/>
              <div className='divcom'>
              <h2>{cartelement.title}</h2>
            <p>${cartelement.price}</p>
            <p>{cartelement.rating.rate}</p>
            <button className='cartbtn'style={{textAlign:"center"}} onClick={()=>{
              deleteproduct(cartelement.id);
            }}>Remove</button>
              </div>
            
            </div> 
            
          })
          }
        </div>:<div> <h2 style={{textAlign:"center", margin:"100px auto", color:"red", fontSize:"43px"}}>No Products Imformation</h2></div>
       }
    </div>
  )
}
