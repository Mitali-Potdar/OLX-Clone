import Image1 from "../images/img1.jpg"
import '../styles/LandingCarousel.css'

function CarousalLanding() {
    return (
        <div id="carousel-landing" className="carousel slide carousel-dark" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item carousel-item-landing active">
                    <img src={Image1} alt="shoes" width="100%" />

                    <div className="container">
                        <div className="carousel-caption text-end">
                            {/* <button type="button" class="btn btn-light btn-md">Shop Now</button> */}
                        </div>
                    </div>
                </div>
                <div className="carousel-item carousel-item-landing ">
                    <img src={Image1} alt="shoes" width="100%" />

                    <div className="container">
                        <div className="carousel-caption text-end">
                            {/* <h1>Another example headline.</h1> */}
                        </div>
                    </div>
                </div>
                <div className="carousel-item carousel-item-landing">
                    <img src={Image1} alt="shoes" width="100%" />

                    <div className="container">
                        <div className="carousel-caption text-start">
                            {/* <h1>Just do it!</h1> */}
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-landing" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel-landing" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CarousalLanding;