import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
    <div className="signUp">
      <div className="container">
        <div className='signUpImg'>
          <img src="/public/Side Image (1).png" alt="" />
        </div>
        <div>

        </div>
        <div className="signUpText">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <input type="text" placeholder='Name' /><br />
          <input type="text" placeholder='Email or Phone Number' /><br />
          <input type="text" placeholder='Password' /><br />
          <button className='Account'>Create Account</button> <br />
          <button className='google'><div><img src="/public/Icon-Google.svg" alt="" /></div> <div>Sign up with Google</div></button>
          <h5>Already have account? <Link to={"/signin"}>Log in</Link></h5>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp