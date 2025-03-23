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
              <div className='Cartcancel'>
                <img src="/public/icon-cancel.svg" alt="" />
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
              <input type="number" min="1" max="99" value="01" />
            </div>
            <div className="cartBoxSubtotal">
              <p>$650 </p>
            </div>

          </div>
          <div className="cartBoxs">

            <div className="cartBoxImg">
              <div className='Cartcancel'>
                <img src="/public/icon-cancel.svg" alt="" />
              </div>
              <div>
                <img src="/public/card1.1.png" alt="" />
              </div>
              <div>
                <p>H1 Gamepad</p>
              </div>
            </div>
            <div className="cartBoxPrice">
              <p>$550</p>
            </div>
            <div className="cartBoxInput">
              <input type="number" min="1" max="99" value="02" />
            </div>
            <div className="cartBoxSubtotal">
              <p>$1100 </p>
            </div>

          </div>
          <div className="cartBtn">
            <div><button>Return To Shop</button></div>
            <div><button>Update Cart</button></div>
          </div>
          <div className="cartBlock">
            <div className="CartCupon">
              <div>
                <input type="text" placeholder='Coupon Code' />
              </div>
              <div>
                <button>
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="cartTotal">
              <h3>
                Cart Total
              </h3>
              <div className="cartTotalSub">
                <p>Subtotal:</p>
                <p>$1750</p>
              </div>
              <div className="cartTotalShop">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="cartTotalTotal">
                <p>Total:</p>
                <p>$1750</p>
              </div>
              <button>
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart