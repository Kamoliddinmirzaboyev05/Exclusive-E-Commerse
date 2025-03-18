import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route />
  </Routes>
  <Footer/>
  </BrowserRouter>;
}

export default App;
