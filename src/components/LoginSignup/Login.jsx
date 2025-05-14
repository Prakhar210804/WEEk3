import React, { use, useState } from 'react'
import  './Login.css'
import password from'../Assets/password.png'
import user_icon from'../Assets/person.png'
import email from '../Assets/email.png'



const Login = () => {
   
     const [action, setaction] = useState("Sign Up")
  return (
    <div className='container'>
       <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
       </div>
       <div className="inputs">
        {action==="Login"?<div></div> :  <div className="input">
            <img src={user_icon} alt="" />
            <input type="text"placeholder='Name' />
        </div> }
       
        <div className="input">
            <img src={email} alt="" />
            <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
            <img src={password} alt="" />
            <input type="password" placeholder='Password' />
        </div>
       </div>
       {action==="Sign Up"? <div></div> :  <div className="forgot-password">Forget Password?<span>Click Here!</span></div>}
      
       <div className="submit-container">
        <div className={action==="Login" ?"submit gray":"submit"} onClick={()=>{setaction("Sign UP")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setaction("Login")}}>Login</div>
       </div>
    </div>
  )
}

export default Login
