import React from "react";
import * as FaIcons from "react-icons/fa";
import "../../styles/productpage.css";

function ProductCard() {
  return (
    <div className="product-card">
      <div className="amount">
        <FaIcons.FaRupeeSign className="rupee-icon" />
        <p style={{ fontSize: "60px" }}>1000</p>
      </div>
      <div className="seller">
        <div className="seller-prof">
          <img
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
            alt="avatar"
            className="avatar"
          />
          <h3>Seller Name</h3>
        </div>
        <FaIcons.FaAngleRight className="arrow" />
      </div>
      <div className="btn-align">
        <button className="button">
          <h4>Chat with Seller</h4>
        </button>
        <button className="button">
          <h4>Accept Offer</h4>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
