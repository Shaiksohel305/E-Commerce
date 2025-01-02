import { Link } from "react-router-dom"
import "./nav.css"

export default function Nav() {
  return (
    <div className='main' >
      <img style={{borderRadius:"8px"}} src="https://th.bing.com/th?id=OIP.LD0EnujnYdGECGN1iLSM9AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="" height="63px" width="120px"/>
      <Link to="/">Home</Link>
      <Link to="/electronics">Electronics</Link>
      <Link to="/jewelery">Jewelery</Link>
      <Link to="/mens">Mens</Link>
      <Link to="/womens">Womens</Link>
      <Link to="/addcart">Cart</Link>
   <button className="btn">Logout</button>
    </div>
  )
}
