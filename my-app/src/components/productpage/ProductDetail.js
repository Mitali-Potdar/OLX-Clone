import React from "react";
import "../../styles/productpage.css";

function ProductDetail() {
  return (
    <div className="product-info">
      <div className="sub-heading">Details</div>
      <hr />
      <div className="details">
        <h3>Model/Company: xyz</h3>
      </div>
      <div className="details" style={{ paddingBottom: "20px" }}>
        <h3>How old is the item: 3 yrs</h3>
      </div>
      <hr />
      <div className="sub-heading">Description</div>
      <p className="details">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
}

export default ProductDetail;
