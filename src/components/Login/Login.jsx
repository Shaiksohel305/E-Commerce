import React from 'react'
import './login.css'
export const Login = () => {
  return (
    <main className='loginmain'>
        <h2 style={{color:"green", border:"2px white"}}>Login</h2>
        <input type="text" placeholder='enter your username' />
        <input type="password" placeholder='enter your password' />
        <button className='button'>Submit</button>
        <p style={{color:"white"}}>if can't register please <a style={{color:"white"}}href="">signin</a></p>
    </main>
  )
}
