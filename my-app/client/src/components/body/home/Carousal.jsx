import "../../../styles/LandingCarousel.css";

function CarousalLanding() {
  return (
    <div id="intro" className="view">
      <div className="mask rgba-black-strong">
        <div className="container-fluid d-flex align-items-center justify-content-center h-100">
          <div className="row d-flex justify-content-center text-center mt-5">
            <div className="col-md-10">
              <h2 className="display-4 fw-bold white-text pt-5 mb-2 carousel-text">
                OLX
              </h2>

              <hr className="hr-light" />

              <h4 className="carousel-text my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti consequuntur.
              </h4>
              <button className="fw-bold btn btn-light">
                Read more<i className="fa fa-book ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarousalLanding;
