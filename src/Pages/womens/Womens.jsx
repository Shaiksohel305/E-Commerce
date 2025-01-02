import React from 'react'
import Axios from '../../components/Axios/Axios'

export default function Womens() {
  return (
    <div>
        <Axios url="http://localhost:3000/womensclothing"
        maintitle="Womens"
        bgImage="url(https://th.bing.com/th/id/OIP.Ndku0xA-10mva-4FuqUDSQHaE6?w=248&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7)" />
    </div>
  )
}
