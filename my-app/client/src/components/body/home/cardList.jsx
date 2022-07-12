import Card from "./card";
import "../../../styles/cardList.css";
import axios from "axios";
import { useState, useEffect } from "react";

function createCard(props) {
  return (
    <Card
      key={props._id}
      id={props._id}
      name={props.productName}
      img={props.images[0]}
      price={props.price}
      description={props.description}
    />
  );
}

// function CardList({ category, sort }) {
function CardList({ category }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );
        category ? setFilteredProducts(res.data) : setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  //   useEffect(() => {
  //     if (sort === "newest") {
  //       setProducts((prev) =>
  //         [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //       );
  //     } else if (sort === "asc") {
  //       setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
  //     } else {
  //       setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
  //     }
  //   }, [sort]);

  return (
    <div className="album py-5">
      <div className="container container-fluid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {category
            ? filteredProducts.map(createCard)
            : products.slice(0, 6).map(createCard)}
        </div>
      </div>
    </div>
  );
}

export default CardList;
