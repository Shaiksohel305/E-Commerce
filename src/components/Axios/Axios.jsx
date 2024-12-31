import axios from 'axios'
import './home.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Axios({url,maintitle,bgImage}) {
  const[state,setstate]=useState([])
  useEffect(()=>{
    sendrequest()
  },[])
  var sendrequest=()=>{
   const pobj= axios.get(url);
    pobj.then((res)=>{
      setstate(res.data).catch((error)=>{
        setstate(error)
      })
    })
  }
  return (
    <div style={{padding:"27px"}}>
      <h2>{maintitle} Products</h2><br/><br/>
      <div className='imgbox' style={{backgroundImage:bgImage}}></div>
      <p style={{marginTop:"22px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure temporibus quas explicabo. Quaerat repudiandae omnis nesciunt reprehenderit. Velit accusantium repellendus, facilis nostrum facere neque reiciendis laudantium atque fugit. Laborum modi in quibusdam vero porro dolorem maiores repudiandae iusto? Accusantium amet, mollitia ducimus neque ab maiores incidunt vero qui iusto, impedit expedita obcaecati aliquid. Omnis, quam recusandae. Amet laudantium excepturi nemo animi nobis repellat praesentium tempore quisquam doloribus. Sequi tenetur nihil odio facilis ad explicabo iusto ducimus eius beatae aut. fugit. Laborum modi in quibusdam vero porro dolorem maiores repudiandae iusto? Accusantium amet, mollitia ducimus neque ab maiores incidunt vero qui iusto, impedit expedita obcaecati aliquid. Omnis, quam recusandae. Amet laudantium excepturi nemo animi nobis repellat praesentium tempore quisquam doloribus. Sequi tenetur nihil odio facilis ad explicabo iusto ducimus </p>
      <button id="btnmain" onClick={sendrequest} style={{margin:"18px auto",padding:"9px 31px",borderRadius:"7px",boxShadow:"0px 0px 10px white", color:"black",border:"1px solid white", background:"rgb(146, 218, 0)", fontWeight:"bolder", height:"38px"}}>Show {maintitle} Products </button>
      <div className='cardcontainer'>
        {
        state.map((element) => {
          return <div className='card'>
            <img style={{ height: "182px", width: "100%", backgroundColor: "green" }} src={element.image} />
            <h2>{element.title}</h2>
            <p>{element.category}</p>
            <p>{element.price}</p>
            <p>{element.rating.rate}</p>
            <Link to={`/productdetails/${element.id}`}><button style={{ backgroundColor: "green",  width:"100%"}}>Product details</button></Link>
            <button style={{ backgroundColor: 'blue' }}>Add Cart</button></div>
        })}

    </div>
      </div>
      )}