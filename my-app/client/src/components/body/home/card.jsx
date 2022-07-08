import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/card.css";
import { Link } from "react-router-dom";

function Card(product) {
  return (
    <div className="col">
      <div className="card text-bg-dark shadow-sm">
        <div className="card-header p-0 card-image-container">
          <FontAwesomeIcon icon={faHeart} className="wishlist-icon">
            <button className="wishlist-button" href="/"></button>
          </FontAwesomeIcon>
          <img className="w-100" src={product.img} alt="random"></img>
        </div>
        <div className="card-body">
          <h3>{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/product/${product.id}`}>
                <button
                  type="button"
                  className="btn btn-md btn-outline-light view-button"
                >
                  View
                </button>
              </Link>
            </div>
            <h5>{product.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
