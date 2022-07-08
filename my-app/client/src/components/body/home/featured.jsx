import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/featured.css";

function Featured() {
  return (
    <div className="featured-cont">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>Exclusive Products</span>
        <Link to="/products">
          <span className="custom-badge">View All</span>
        </Link>
      </div>
    </div>
  );
}

export default Featured;
