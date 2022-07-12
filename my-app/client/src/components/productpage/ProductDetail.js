import React from "react";
import "../../styles/productpage.css";

function ProductDetail(props) {
  return (
    <div className="product-info">
      <div className="sub-heading">Details</div>
      <hr />
      <div className="details">
        <h3>Model/Company: {props.brand}</h3>
      </div>
      <div className="details" style={{ paddingBottom: "20px" }}>
        <h3>How old is the item: {props.age}</h3>
      </div>
      <hr />
      <div className="sub-heading">Description</div>
      <p className="details">{props.description}</p>
    </div>
  );
}

export default ProductDetail;
