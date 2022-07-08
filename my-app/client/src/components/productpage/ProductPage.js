import React from "react";
import "../../styles/productpage.css";
import ProductDetail from "./ProductDetail";
import ProductCard from "./ProductCard";
import ProductImages from "./ProductImages";
import * as FaIcons from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const axios = require("axios");

function ProductPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/find/" + id
        );
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  console.log(id);

  return (
    <div className="body">
      <div className="heading">
        <div className="product-name">{product.productName}</div>
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
      <ProductImages images={product.images} />
      <div className="all-info">
        <ProductDetail
          brand={product.brand}
          age={product.age}
          description={product.description}
        />
        <ProductCard owner={product.owner} price={product.price} />
      </div>
    </div>
  );
}

export default ProductPage;
