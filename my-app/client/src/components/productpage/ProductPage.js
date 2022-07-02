import React from "react";
import "../../styles/productpage.css";
import ProductDetail from "./ProductDetail";
import ProductCard from "./ProductCard";
import ProductImages from "./ProductImages";
import * as FaIcons from "react-icons/fa";

function ProductPage() {
  return (
    <div className="body">
      <div className="heading">
        <div className="product-name">ITEM NAME</div>
        <div className="share-like">
          <a href="/" className="share-save">
            <FaIcons.FaShareAlt />
            <div>Share</div>
          </a>
          <a href="/" className="share-save">
            <FaIcons.FaRegHeart />
            <div>Save</div>
          </a>
        </div>
      </div>
      <hr />
      <div className="gallery-padding" />
      <ProductImages />
      <div className="all-info">
        <ProductDetail />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductPage;
