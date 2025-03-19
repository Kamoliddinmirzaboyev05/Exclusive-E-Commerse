import React, { useEffect, useState } from "react";
import "./Home.css";
import { BiJoystick, BiSolidHomeAlt2 } from "react-icons/bi";
import { CiDesktop, CiMobile1 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { PiHeadphonesBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
function Home() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [productCount, setProductCount] = useState(4);

  // Getdata function
  const getData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/product/list/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  // Getcategories function

  const getCategories = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/product/categories/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="home">
      <header>
        <div className="hero">
          <div className="container">
            <div className="heroFilter">
              {categories?.map((category) => {
                return (
                  <div className="row">
                    <p>{category.title}</p>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                );
              })}
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
              {products?.map((product, index) => {
                if (index < productCount) {
                  return <ProductCard product={product} />;
                } else {
                  return;
                }
              })}
            </div>
            <div className="view">
              <button
                onClick={() => {
                  productCount == 4
                    ? setProductCount(10000)
                    : setProductCount(4);
                }}
                className="viewBtn"
              >
                {productCount == 4 ? "View All Products" : "View less"}
              </button>
            </div>
          </div>
        </section>
        <section className="byCategory">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Categories</p>
            </div>
            <h2 className="sectionTitle">Browse By Category</h2>
            <div className="categoryBlock">
              <div className="categoryBox">
                <CiMobile1 />
                <p>Phones</p>
              </div>
              <div className="categoryBox">
                <CiDesktop />
                <p>Computers</p>
              </div>
              <div className="categoryBox">
                <BsSmartwatch />
                <p>SmartWatch</p>
              </div>
              <div className="categoryBox">
                <IoCameraOutline />
                <p>Camera</p>
              </div>
              <div className="categoryBox">
                <PiHeadphonesBold />
                <p>HeadPhones</p>
              </div>
              <div className="categoryBox">
                <BiJoystick />
                <p>Phones</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bestSelling">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>This month</p>
            </div>
            <div className="sectionHead">
              <h2 className="sectionTitle">Browse By Category</h2>
              <button className="viewBtn">View All</button>
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

        <section className="discAdd">
          <div className="container">
            <div className="leftData">
              <p className="sectionTitle">Categories</p>
              <h2>Enhance Your Music Experience</h2>
              <div className="discTimer">
                <span className="discTimerItem">
                  <h2>23</h2>
                  <p>Hours</p>
                </span>
                <span className="discTimerItem">
                  <h2>23</h2>
                  <p>Hours</p>
                </span>
                <span className="discTimerItem">
                  <h2>23</h2>
                  <p>Hours</p>
                </span>
                <span className="discTimerItem">
                  <h2>23</h2>
                  <p>Hours</p>
                </span>
              </div>
              <button className="viewBtn buyNowBtn">Buy Now</button>
            </div>
            <div className="rightImg">
              <img src="/public/musicex.png" alt="" />
            </div>
          </div>
        </section>

        <section className="exploreProducts">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Explore Our Products</p>
            </div>
            <div className="sectionHead">
              <h2 className="sectionTitle">Browse By Category</h2>
              <div className="slideBtns">
                <button className="slideBtn">
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button className="slideBtn">
                  <i className="fas fa-arrow-right"></i>
                </button>
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
            <div className="view">
              <button className="viewBtn">View All Products</button>
            </div>
          </div>
        </section>

        <section className="featuredProducts">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Featured</p>
            </div>
            <h2 className="sectionTitle">New Arrival</h2>
            <div className="featuredBlock">
              <div className="leftProduct">
                <img src="/public/playstation.png" alt="" />
                <div className="featuredProductData">
                  <h2>PlayStation 5</h2>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <Link>Shop Now</Link>
                </div>
              </div>
              <div className="rightProducts">
                <div className="topProduct">
                  <img src="/public/women.png" alt="" />
                  <div className="featuredProductData">
                    <h2>Women’s Collections</h2>
                    <p>
                      Featured woman collections that give you another vibe.
                    </p>
                    <Link>Shop Now</Link>
                  </div>
                </div>
                <div className="bottomProducts">
                  <div className="bottomProduct">
                    <img src="/public/speakers.png" alt="" />
                    <div className="featuredProductData">
                      <h2>Speakers</h2>
                      <p>Amazon wireless speakers</p>
                      <Link>Shop Now</Link>
                    </div>
                  </div>
                  <div className="bottomProduct">
                    <img src="/public/gucci.png" alt="" />
                    <div className="featuredProductData">
                      <h2>Perfume</h2>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <Link>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <div className="serviceBlock">
              <div className="serviceItem">
                <div className="serviceImg">
                  <img src="/public/delivery.png" alt="" />
                </div>
                <div className="serviceData">
                  <h2>FREE AND FAST DELIVERY</h2>
                  <p>Free delivery for all orders over $140</p>
                </div>
              </div>
              <div className="serviceItem">
                <div className="serviceImg">
                  <img src="/public/call.png" alt="" />
                </div>
                <div className="serviceData">
                  <h2>24/7 CUSTOMER SERVICE</h2>
                  <p>Friendly 24/7 customer support</p>
                </div>
              </div>
              <div className="serviceItem">
                <div className="serviceImg">
                  <img src="/public/garantee.png" alt="" />
                </div>
                <div className="serviceData">
                  <h2>MONEY BACK GUARANTEE</h2>
                  <p>We reurn money within 30 days</p>
                </div>
              </div>
            </div>
            <div className="toTop">
              <button>
                <i className="fas fa-arrow-up"></i>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
