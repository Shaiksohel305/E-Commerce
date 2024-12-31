import React from 'react'
import Axios from '../../components/Axios/Axios'

export default function Jewelery() {
  return (
    <div>
        <Axios url="http://localhost:3000/jewelery"
        maintitle="Jewelery"
        bgImage="url(https://th.bing.com/th?id=OIP.1r7XM9DtWiq4rDuAB3-bIgHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2)" />
    </div>
  )
}
