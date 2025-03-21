import React from "react";
import "./SignIn.css"

function SignIn() {
  return (
    <>

      <div className="signIp">
        <div className="container">
          <div className='signIpImg'>
            <img src="/public/Side Image (1).png" alt="" />
          </div>
          <div>

          </div>
          <div className="signIpText">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <input type="text" placeholder='Email or Phone Number' /><br />
            <input type="text" placeholder='Password' /><br />
            <div className="signInIcon">
              <div><button>Log In</button> </div>
              <div><p>Forget Password?</p></div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default SignIn;
