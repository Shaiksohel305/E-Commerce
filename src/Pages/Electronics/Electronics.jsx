import React from 'react'
import Axios from '../../components/Axios/Axios'

export default function Electronics() {
  return (
    <div>
        <Axios url="http://localhost:3000/electronics"
        maintitle="Electronics"
        bgImage="url(https://th.bing.com/th?id=OIP.HXI_b7CNjaV5jN5oAIB6vAHaDq&w=350&h=173&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2)" />
    </div>
  )
}
