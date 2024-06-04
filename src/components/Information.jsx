// import main
import React from "react";

// import css
import '../css/information.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import images
import Ski from '../images/nap1.jpg'
import Excursion from '../images/nap2.jpg'
import Shop from '../images/nap3.jpg'
import SPA from '../images/nap4.jpg'
import Weading from '../images/nap5.jpg'

function Information () {
    return (
        <section className="information">
            <div className="informations-content d-flex justify-content-evenly gap-5 flex-wrap">
                <div className="content-item d-flex flex-column align-items-center gap-3">
                    <img src={Ski} className="image-feature object-fit-cover img-fluid" alt="Ski tours" />
                    <p className="description-feature">Ski tours</p>
                </div>
                <div className="content-item d-flex flex-column align-items-center gap-3">
                    <img src={Excursion} className="image-feature object-fit-cover img-fluid" alt="Excursion tours" />
                    <p className="description-feature">Excursion tours</p>
                </div>
                <div className="content-item d-flex flex-column align-items-center gap-3">
                    <img src={Shop} className="image-feature object-fit-cover img-fluid" alt="Shop tours" />
                    <p className="description-feature">Shop tours</p>
                </div>
                <div className="content-item d-flex flex-column align-items-center gap-3">
                    <img src={SPA} className="image-feature object-fit-cover img-fluid" alt="SPA tours" />
                    <p className="description-feature">SPA tours</p>
                </div>
                <div className="content-item d-flex flex-column align-items-center gap-3">
                    <img src={Weading} className="image-feature object-fit-cover img-fluid" alt="Weading tours" />
                    <p className="description-feature">Weading tours</p>
                </div>
            </div>
        </section>
    )
}
export default Information