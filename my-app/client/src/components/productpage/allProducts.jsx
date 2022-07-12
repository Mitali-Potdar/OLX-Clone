import Featured from "../body/home/featured";
import CardList from "../body/home/cardList";
import Sidebar from "../body/home/Sidebar";
import React from "react";
import { useLocation } from "react-router-dom";

function AllProducts() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  return (
    <div>
      <Sidebar />
      <Featured heading="All Products" />
      <CardList category={category} />
    </div>
  );
}

export default AllProducts;
