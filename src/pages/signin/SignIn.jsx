import React, { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [email_or_pasword, setEmailorPassword] = useState(null);
  const [password, setPassword] = useState(null);

  const getUser = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email_or_phone,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://ecommercev01.pythonanywhere.com/user/token/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="signIn">
        <div className="container">
          <div className="signInImg">
            <img src="/Side Image (1).png" alt="" />
          </div>
          <div></div>
          <div className="signInText">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <input
              onChange={(e) => {
                setEmailorPassword(e.target.value);
              }}
              type="text"
              placeholder="Email or Phone Number"
            />
            <br />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              placeholder="Password"
            />
            <br />
            <div className="signInIcon">
              <div>
                <button>Log In</button>{" "}
              </div>
              <div>
                <p>Forget Password?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
