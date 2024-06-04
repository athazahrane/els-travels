// import main
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Typed from 'typed.js'

// import css
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Hero.css'

function Hero() {

    const el = React.useRef(null)

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Indonesia, a Southeast Asian nation with thousands of volcanic islands, boasts diverse ethnic groups and languages.',

                'Find essential information about traveling to Indonesia, its culture, and exciting adventures. ',

                'Get general information about Indonesia before your departure. ',

                'Search for travel deals and promotions within Indonesia. ',
            ],
            typeSpeed: 15,
            backSpeed: 20,
            showCursor: false,
            loop: true,
        })
        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <section className="hero" id="home">
            <Container>
                <div className="content-hero">
                    <span className="primary text-uppercase">let's,</span>
                    <h1 className='title-hero'>Planning your own travel</h1>
                    <div className="typing">
                        <p ref={el}></p>
                    </div>
                    <button className='btn-primary'>Book a trip</button>
                </div>
            </Container>
        </section>
    )
}
export default Hero