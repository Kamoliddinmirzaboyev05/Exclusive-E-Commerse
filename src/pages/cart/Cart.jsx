import React from 'react'
import "./Cart.css"

function Cart() {
  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="pageWay">
            <p>Home</p>
            <p>/</p>
            <p className="activePage">Cart</p>
          </div>
          <div className="cartTitle">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="cartBoxs">

            <div className="cartBoxImg">
              <div>
              <img className='Cartcancel' src="/public/icon-cancel.svg" alt="" />
              </div>
              <div>
                <img src="/public/card1.3.png" alt="" />
              </div>
              <div>
                <p>LCD Monitor</p>
              </div>
            </div>
            <div className="cartBoxPrice">
              <p>$650</p>
            </div>
            <div className="cartBoxInput">
              <input type="number" min="1" max="99" value="1" />
            </div>
            <div className="cartBoxSubtotal">
              <p>$650 </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Cart