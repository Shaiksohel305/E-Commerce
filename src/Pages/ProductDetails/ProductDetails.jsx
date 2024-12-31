import { useParams } from "react-router-dom"
import "./Product.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProductDetails() {
  let {id} =useParams()
  let[state,setstate]=useState({
      id:0,
      title:"",
      description:"",
      image:"",
      price:"",
      rating:{rate:0,count:0},
      category:""
  })
  useEffect(()=>{
    axios.get(`http://localhost:3000/products/${id}`).then((res)=>{
        setstate(res.data)
    }).catch((error)=>{
      alert("while factching the data")
    })
  },[])

  return (
    <div className="Details">
        <div className='left'>
          <img src={state.image} alt="" height={"299px"} width={"100%"} />
        </div>
        <div className='right'>
            <dl>
              <dt><b>{state.title}</b></dt><br />
              <dt><b>Price:{state.price}</b></dt><br />
              <dt><b>Category</b>:{state.category}</dt><br />
              <dt><b>Description</b>: {state.description}</dt><br />
              <dt><b>Rating</b> :{state.rating.rate}</dt><br />
            </dl>
            <div id="click">
              <button style={{border: "3px solid red"}}>
                <b>Add cart</b>
              </button>
              <button style={{border: "3px solid green"}}>
                <b>Buy now</b>
              </button>
            </div>
        </div>
    </div>
  )
}
