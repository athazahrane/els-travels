import React from "react";

import '../css/popular.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Popular1 from '../images/t1.jpg'
import Popular2 from '../images/t2.jpg'
import Popular3 from '../images/t3.jpg'

function Popular() {
    return (
        <section className="popular d-flex justify-content-center" id="popular">
            <div className="content-popular">
                <h1 className="title-popular text-capitalize fw-bold text-center text-light">popular tours</h1>
                <div className="group-cards d-flex justify-content-evenly flex-wrap gap-4 pt-5">
                    <div className="card-item-popular rounded-2 overflow-hidden">
                        <img src={Popular1} className="image-content-popular" alt="East Java" />
                        <div className="description-card text-capitalize text-light">
                            <p className="des-title">east java</p>
                            <h6 className="place-name fw-bold">mount bromo</h6>
                        </div>
                    </div>
                    <div className="card-item-popular rounded-2 overflow-hidden">
                        <img src={Popular2} className="image-content-popular" alt="East Java" />
                        <div className="description-card text-capitalize text-light">
                            <p className="des-title">east java</p>
                            <h6 className="place-name fw-bold">mount bromo</h6>
                        </div>
                    </div>
                    <div className="card-item-popular rounded-2 overflow-hidden">
                        <img src={Popular3} className="image-content-popular" alt="East Java" />
                        <div className="description-card text-capitalize text-light">
                            <p className="des-title">east java</p>
                            <h6 className="place-name fw-bold">mount bromo</h6>
                        </div>
                    </div>
                </div>
                <button className="btn-primary mt-5 d-block px-5 mx-auto">See tours</button>
            </div>
        </section>
    )
}

export default Popular