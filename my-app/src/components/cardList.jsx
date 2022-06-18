import Card from "./card";
import content from "./contentList";
import '../styles/cardList.css'


function createCard(props) {
    return (
        <Card
            key={props.id}
            name={props.name}
            img={props.img}
            price={props.price}
        />
    )
}

function CardList() {
    return (
        <div className="album py-5">
            <div className="container">
                <span className="list-intro">
                    <h2 className="featured-heading">Featured Products</h2><a href="/" className="view-all">View All</a>
                </span>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">
                    {content.map(createCard)}
                </div>
            </div>
        </div>
    )
}

export default CardList;