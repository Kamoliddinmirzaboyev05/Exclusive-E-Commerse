import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <Link to={`/oneProduct/${product.id}`}>
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
            <img
              src={`https://ecommercev01.pythonanywhere.com/${product?.pictures[0]}`}
              alt={product?.pictures}
            />
          </div>
          <button className="addCartBtn">Add To Cart</button>
        </div>
        <div className="productData">
          <h2>{String(product.title).slice(0, 15)}...</h2>
          <div className="price">
            <p className="newPrice">${product.price}</p>
            <p className="lastPrice">$160</p>
          </div>
          <div className="productRate">
            <img src="/public/stars].svg" alt="" />
            <p>(88)</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
