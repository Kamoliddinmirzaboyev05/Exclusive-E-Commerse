import React, { useEffect, useState } from "react";
import "./Home.css";
import { CiMobile1 } from "react-icons/ci";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { link } from "../../config";
import { Card, CardContent, Typography } from "@mui/material";

function Home({ getWishlist }) {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [productCount, setProductCount] = useState(4);

  // Getdata function
  const getData = () => {
    const myHeaders = new Headers();
    if (localStorage.getItem("token")) {
      myHeaders.append(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );
    }

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
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

  const getCategories = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${link}/product/categories/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => console.error(error));
  };

  // Timer function
  const timerFunction = () => {
    const [time, setTime] = useState(87400);
    setInterval(() => {
      // console.log(time);
      // setTime(time - 1);
    }, 1000);
  };
  timerFunction();
  return (
    <div className="home">
      <header>
        <div className="hero">
          <div className="container">
            <div className="heroFilter">
              {categories?.map((category) => {
                return (
                  <div key={category.id} className="row">
                    <p>{category.title}</p>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                );
              })}
              {!categories &&
                [1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <Box sx={{ width: 150 }}>
                      <Skeleton
                        style={{ marginBottom: "28px" }}
                        variant="h1"
                        width={170}
                        height={20}
                      />
                    </Box>
                  );
                })}
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="heroSlider">
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="heroSlide">
                    <img src="/heroimg.png" alt="" />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
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
                  return <ProductCard key={product.id} getData={getData} getWishlist={getWishlist} product={product} />;
                } else {
                  return;
                }
              })}
              {!categories &&
                [1, 2, 3, 4].map((item) => {
                  return (
                    <Card sx={{ maxWidth: 300, p: 3 }}>
                      {/* Mahsulot rasmi uchun Skeleton */}
                      <Skeleton
                        variant="rectangular"
                        width={220}
                        height={180}
                      />

                      <CardContent>
                        <Skeleton variant="text" width="80%" height={30} />

                        <Skeleton variant="text" width="40%" height={20} />

                        <Skeleton
                          style={{ marginBottom: "20px" }}
                          variant="rectangular"
                          width="100%"
                          height={40}
                          sx={{ mt: 2 }}
                        />
                      </CardContent>
                    </Card>
                  );
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
              {categories?.map((category) => {
                return (
                  <div key={category.id} className="categoryBox">
                    <CiMobile1 />
                    <p>{category.title}</p>
                  </div>
                );
              })}
              {!categories &&
                [1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <Card sx={{ maxWidth: 300, p: 3 }}>
                      <Skeleton
                        variant="rectangular"
                        width={120}
                        height={120}
                      />
                    </Card>
                  );
                })}
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
              <h2 className="sectionTitle">Best Selling Products</h2>
              <button className="viewBtn">View All</button>
            </div>
            <div className="productsBlock">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {products?.map((product) => {
                  if (product.price > product.discount_price) {
                    return (
                      <SwiperSlide>
                        <ProductCard key={product.id} product={product} />
                      </SwiperSlide>
                    );
                  } else {
                    return;
                  }
                })}
              </Swiper>
              {!categories &&
                [1, 2, 3, 4].map((item) => {
                  return (
                    <Card sx={{ maxWidth: 300, p: 3 }}>
                      {/* Mahsulot rasmi uchun Skeleton */}
                      <Skeleton
                        variant="rectangular"
                        width={220}
                        height={180}
                      />

                      <CardContent>
                        <Skeleton variant="text" width="80%" height={30} />

                        <Skeleton variant="text" width="40%" height={20} />

                        <Skeleton
                          style={{ marginBottom: "20px" }}
                          variant="rectangular"
                          width="100%"
                          height={40}
                          sx={{ mt: 2 }}
                        />
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>
        </section>

        <section className="discAdd">
          <div className="container">
            <div className="leftData">
              <p className="sectionTitle">Categories</p>
              <h2>Enhance Your Music Experience</h2>
              <div className="discTimer">
                <div className="discTimerItem">
                  <h2>23</h2>
                  <p>Hours</p>
                </div>
                <div className="discTimerItem">
                  <h2>23</h2>
                  <p>Hours</p>
                </div>
                <div className="discTimerItem">
                  <h2>23</h2>
                  <p>Hours</p>
                </div>
                <div className="discTimerItem">
                  <h2>23</h2>
                  <p>Hours</p>
                </div>
              </div>
              <button className="viewBtn buyNowBtn">Buy Now</button>
            </div>
            <div className="rightImg">
              <img src="/musicex.png" alt="" />
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
                <img src="/playstation.png" alt="" />
                <div className="featuredProductData">
                  <h2>PlayStation 5</h2>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <Link>Shop Now</Link>
                </div>
              </div>
              <div className="rightProducts">
                <div className="topProduct">
                  <img src="/women.png" alt="" />
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
                    <img src="/speakers.png" alt="" />
                    <div className="featuredProductData">
                      <h2>Speakers</h2>
                      <p>Amazon wireless speakers</p>
                      <Link>Shop Now</Link>
                    </div>
                  </div>
                  <div className="bottomProduct">
                    <img src="/gucci.png" alt="" />
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
                  <img src="/delivery.png" alt="" />
                </div>
                <div className="serviceData">
                  <h2>FREE AND FAST DELIVERY</h2>
                  <p>Free delivery for all orders over $140</p>
                </div>
              </div>
              <div className="serviceItem">
                <div className="serviceImg">
                  <img src="/call.png" alt="" />
                </div>
                <div className="serviceData">
                  <h2>24/7 CUSTOMER SERVICE</h2>
                  <p>Friendly 24/7 customer support</p>
                </div>
              </div>
              <div className="serviceItem">
                <div className="serviceImg">
                  <img src="/garantee.png" alt="" />
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
