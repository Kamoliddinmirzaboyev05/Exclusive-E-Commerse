import React, { useEffect, useState } from "react";
import "./OneProduct.css";
import { useParams } from "react-router-dom";
function OneProduct() {
  const { id } = useParams();
  const [oneProductData, setOneProductData] = useState(null);
  // getOneProduct function
  const getOneProduct = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://ecommercev01.pythonanywhere.com/product/detail/?product_id=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setOneProductData(result);
      })
      .catch((error) => console.error(error));
  };
  console.log(oneProductData);

  useEffect(() => {
    getOneProduct();
  }, []);
  return (
    <div className="oneProduct">
      <main>
        <section className="mainSection">
          <div className="container">
            <div className="pageWay">
              <p>Account </p>
              <p>/</p>
              <p>Gaming</p>
              <p>/</p>
              <p className="activePage">Havic HV G-92 Gamepad</p>
            </div>
            <div className="mainBlock">
              <div className="leftSide">
                <div className="itemImgs">
                  <div className="itemImg">
                    <img src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[0]?.file}`} alt="" />
                  </div>
                  <div className="itemImg">
                    <img
                      src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[1]?.file}`}
                      alt=""
                    />
                  </div>
                  <div className="itemImg">
                    <img src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[2]?.file}`} alt="" />
                  </div>
                  <div className="itemImg">
                    <img src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[3]?.file}`} alt="" />
                  </div>
                </div>
                <div className="mainImg">
                  <img
                    src={`https://ecommercev01.pythonanywhere.com/${oneProductData?.pictures[0]?.file}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="rightSide">
                <h2 className="productTitle">{oneProductData?.title}</h2>
                <div className="rating">
                  <div className="rate">
                    <img src="/public/stars].svg" alt="" />
                    <p>(150 Reviews)</p>
                  </div>
                  <span></span>
                  <p className="stock">In Stock</p>
                </div>
                <p className="price">{oneProductData?.price} UZS</p>
                <p className="productInfo">{oneProductData?.description}</p>
                <div className="colours">
                  <p>Colours: </p>
                  <div className="selectColor">
                    <div className="color active blueColor"></div>
                    <div className="color redColor"></div>
                  </div>
                </div>
                <div className="size">
                  <p>Size: </p>
                  <div className="selectSize">
                    <span>
                      <p>XS</p>
                    </span>
                    <span>
                      <p>S</p>
                    </span>
                    <span className="active">
                      <p>M</p>
                    </span>
                    <span>
                      <p>L</p>
                    </span>
                    <span>
                      <p>XL</p>
                    </span>
                  </div>
                </div>
                <div className="mainBtns">
                  <div className="counter">
                    <button>-</button>
                    <p className="countValue">2</p>
                    <button>+</button>
                  </div>
                  <button className="buyNowBtn ">Buy Now</button>
                  <button className="likeBtn">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>
                <div className="deliveryService">
                  <div className="freeDelivery">
                    <div className="serviceBoxImg">
                      <img src="/public/delivery.svg" alt="" />
                    </div>
                    <div className="serviceBoxText">
                      <h2>Free Delivery</h2>
                      <p>Enter your postal code for Delivery Availability</p>
                    </div>
                  </div>
                  <div className="freeDelivery returnDelivery">
                    <div className="serviceBoxImg">
                      <img src="/public/reutnr.svg" alt="" />
                    </div>
                    <div className="serviceBoxText">
                      <h2>Return Delivery</h2>
                      <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bestSelling">
          <div className="container">
            <div className="sectionType">
              <span className="rec"></span>
              <p>Related Item</p>
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
      </main>
    </div>
  );
}

export default OneProduct;
