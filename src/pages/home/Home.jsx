import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <header>
        <div className="hero">
          <div className="container">
            <div className="heroFilter">
              <div className="row">
                <p>Woman’s Fashion</p>
                <i className="fas fa-chevron-right"></i>
              </div>
              <div className="row">
                <p>Men’s Fashion</p>
                <i className="fas fa-chevron-right"></i>
              </div>
              <div className="row">
                <p>Electronics</p>
              </div>
              <div className="row">
                <p>Home & Lifestyle</p>
              </div>
              <div className="row">
                <p>Medicine</p>
              </div>
              <div className="row">
                <p>Sports & Outdoor</p>
              </div>
              <div className="row">
                <p>Baby’s & Toys</p>
              </div>
              <div className="row">
                <p>Groceries & Pets</p>
              </div>
              <div className="row">
                <p>Health & Beauty</p>
              </div>
            </div>
            <div className="heroSlider">
              <div className="heroSlide">
                <img src="/public/heroimg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="flashSales">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Today’s</p>
            </div>
            <div className="sectionHead">
              <div className="sectionHeadLeft">
                <h2 className="sectionTitle">Flash Sales</h2>
                <div className="timer">
                  <div className="value">
                    <p>Days</p>
                    <h2>03</h2>
                  </div>
                  <p className="doubleDot">:</p>
                  <div className="value">
                    <p>Hours</p>
                    <h2>23</h2>
                  </div>
                  <p className="doubleDot">:</p>
                  <div className="value">
                    <p>Minutes</p>
                    <h2>19</h2>
                  </div>
                  <p className="doubleDot">:</p>
                  <div className="value">
                    <p>Seconds</p>
                    <h2>56</h2>
                  </div>
                </div>
              </div>
              <div className="sectionHeadRight">
                <div className="slideBtns">
                  <button className="slideBtn">
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <button className="slideBtn">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="productsBlock">
              <div className="productCard">
                <div className="productImgBox">
                  <span className="disc">
                    <p>-40%</p>
                  </span>
                  <div className="hoverBtn heartBtn">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="hoverBtn eyeBtn">
                    <i className="fa-regular fa-eye"></i>
                  </div>
                  <div className="productImg">
                    <img src="/public/card1.1.png" alt="" />
                  </div>
                  <button className="addCartBtn">Add To Cart</button>
                </div>
                <div className="productData">
                  <h2>HAVIT HV-G92 Gamepad</h2>
                  <div className="price">
                    <p className="newPrice">$120</p>
                    <p className="lastPrice">$160</p>
                  </div>
                  <div className="productRate">
                    <img src="/public/stars].svg" alt="" />
                    <p>(88)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
