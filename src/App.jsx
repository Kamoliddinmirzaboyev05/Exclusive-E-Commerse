import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import OneProduct from "./pages/oneProduct/OneProduct";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Wishlist from "./pages/wishlist/Wishlist";
import { Bounce, ToastContainer } from "react-toastify";
import { link } from "./config";
import Search from "./pages/search/Search";
function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [products, setProducts] = useState(null);

  const getUserData = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${link}/user/detail/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserInfo(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getUserData();
  }, []);

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

    fetch(`${link}/product/list/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.error(error));
  };

  const [likedProducts, setLikedProducts] = useState(null);
  // getmywishlist function
  const getWishlist = () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${link}/action/my-wishlist/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLikedProducts(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar likedProducts={likedProducts} userInfo={userInfo} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              getData={getData}
              getWishlist={getWishlist}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account userInfo={userInfo} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search products={products} />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist getWishlist={getWishlist} likedProducts={likedProducts} />
          }
        />

        <Route path="/signin" element={<SignIn getUserData={getUserData} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/oneProduct/:id" element={<OneProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
