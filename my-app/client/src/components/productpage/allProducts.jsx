import Featured from "../body/home/featured";
import CardList from "../body/home/cardList";
import Sidebar from "../body/home/Sidebar";
import React from "react";

function allProducts() {
  let category = null;
  return (
    <div>
      <Sidebar />
      <Featured heading="All Products" />
      <CardList category={category} />
    </div>
  );
}

export default allProducts;
