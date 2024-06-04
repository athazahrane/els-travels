import React from 'react'

import '../css/aboutus.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Mountain from '../images/h1.png'

function AboutUs () {
    return (
        <section className="informations d-flex justify-content-evenly gap-5 align-items-center" id="informations">
            <img src={Mountain} alt="east nusa tengga" className='image-information object-fit-cover rounded-3' />
            <div className="description-informations">
                <span className="title-primary text-uppercase">east nusa tengga</span>
                <h1 className='title-information text-light fw-bold'>Have you enjoyed your holiday</h1>
                <p className='text-light'>You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo island, you also to tastethe marine tourism. The beautiful waters of Komodo will make you meet many travelers from other countries</p>
                <button className='btn-primary'>Read more</button>
            </div>
        </section>
    )
}

export default AboutUs