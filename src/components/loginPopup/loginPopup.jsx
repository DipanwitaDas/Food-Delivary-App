import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './loginPopup.css'
const loginPopup = ({setShowLogin}) => {

    const[currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
            </div>
            <div className="login-popup-input">
                {currState==='Login' ? <></> :<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Your password' required />
            </div>
            <button>{currState==='Sign Up' ? 'Create Account' : 'Login'}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>Be continuting , i agree to the terms of use & privacy policy</p>
            </div>
            {currState==='Login'
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }          
        </form>
    </div>
  )
}

export default loginPopup 