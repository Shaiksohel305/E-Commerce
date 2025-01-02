import './App.css'
import { Route,Routes} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Axios from './components/Axios/Axios'
import Electronics from './Pages/Electronics/Electronics'
import Jewelery from './Pages/jewelery/Jewelery'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/womens/Womens'
import Home from './Pages/Home/Home'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Addcart from './Pages/Addcart/Addcart'
export default function App() {
  return (
    <div><Nav/>
    <Routes>
       <Route path='/'element={<Home/>}/>
       <Route path='/electronics'element={<Electronics/>}/>
       <Route path='/jewelery'element={<Jewelery/>}/>
       <Route path='/mens'element={<Mens/>}/>
       <Route path='/womens'element={<Womens/>}/>
       <Route path='/addcart' element={<Addcart/>}/>
       <Route path={`/productdetails/:id`} element={<ProductDetails/>}/>
      </Routes>
    </div>
  )
}
