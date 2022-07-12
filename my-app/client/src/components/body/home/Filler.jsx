import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faComments, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import { fa} from '@fortawesome/free-brands-svg-icons'
import '../../../styles/Filler.css';



function Filler() {
    return (
        <div class="container marketing filler">


            <div class="row">
                <div class="col-lg-4">
                    <FontAwesomeIcon icon={faUsers} className="filler-icon" style={{ color: "cyan" }} />
                    <h2 class="fw-normal">Join the Community</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                </div>
                <div class="col-lg-4">
                    <FontAwesomeIcon icon={faComments} className="filler-icon" />
                    <h2 class="fw-normal">Chat with Sellers</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                </div>
                <div class="col-lg-4">
                    <FontAwesomeIcon icon={faHeartCirclePlus} className="filler-icon" style={{ color: "pink" }} />
                    <h2 class="fw-normal">Be Respectful</h2>
                    <p>And lastly this, the third column of representative placeholder content.</p>
                </div>
            </div>
        </div>
    )
}

export default Filler;