import React from "react";

import '../css/culture.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import IndonesianCulture from '../images/c1.png'

function Culture () {
    return (
        <section className="culture d-flex justify-content-evenly gap-5 align-items-center flex-wrap" id="culture">
            <div className="description-informations">
                <span className="title-primary text-uppercase">indonesian culture</span>
                <h1 className='title-information text-light fw-bold'>Our culture here is very friendly to peaople</h1>
                <p className='text-light'>known for this politeness, manners and gentleness. This becomes a characteritic when they mingle with other tribes and become basic traits that are passed down by their ancestors.</p>
                <button className='btn-primary'>Read more</button>
            </div>
            <img src={IndonesianCulture} alt="Indonesian Culture" className='image-information object-fit-cover rounded-3' />
        </section>
    )
}

export default Culture