import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../../../styles/card.css'

function Card(props) {
    return (
        <div className="col">
            <div className="card text-bg-dark shadow-sm">
                <div className="card-header p-0 card-image-container">
                    <FontAwesomeIcon icon={faHeart} className="wishlist-icon"><button className="wishlist-button" href="/"></button></FontAwesomeIcon>
                    <img className="w-100" src={props.img} alt="random">
                    </img>
                </div>
                <div className="card-body">
                    <h3>{props.name}</h3>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-md btn-outline-light view-button">View</button>
                            {/* <button type="button" className="btn btn-sm btn-outline-danger">Add to Wishlist</button> */}
                        </div>
                        <h5>{props.price}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;