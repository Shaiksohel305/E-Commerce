import React from 'react'
import Axios from '../../components/Axios/Axios'

export default function Mens() {
  return (
    <div>
        <Axios url="http://localhost:3000/mensclothing"
        maintitle="Mens"
        bgImage="url(https://th.bing.com/th/id/OIP.1HO4yakLNYTrPqET-AlcvQHaEJ?w=301&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7)" />
    </div>
  )
}
