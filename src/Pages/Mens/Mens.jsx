import React from 'react'
import Axios from '../../components/Axios/Axios'

export default function Mens() {
  return (
    <div>
        <Axios url="http://localhost:3000/mensclothing"
        maintitle="Mens"
        bgImage="url(https://th.bing.com/th/id/OIP.5u6K7RPEZ1582kZrderJTwHaFj?pid=ImgDet&w=206&h=154&c=7&dpr=1.1)" />
    </div>
  )
}
