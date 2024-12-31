import React from 'react'
import Axios from '../../components/Axios/Axios'

export default function Womens() {
  return (
    <div>
        <Axios url="http://localhost:3000/womensclothing"
        maintitle="Womens"
        bgImage="url(https://th.bing.com/th/id/OIP.wPj6YGdRoAKErgdT30JV2AHaH0?w=138&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7)" />
    </div>
  )
}
