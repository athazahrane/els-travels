import React from "react";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";

import '../css/contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Contact() {
    return (
        <footer className="contact " id="contact">
            <div className="content-contact d-flex justify-content-evenly align-items-center flex-wrap gap-5">
                <div className="title-groups">
                    <h1 className="title-contact fw-bold text-light">Ready to explore?</h1>
                    <p className="text-secondary">Let's go on vacation, Make your day</p>
                </div>
                <form className="contact-form-content d-flex justify-content-center flex-wrap gap-3">
                    <input type="email" className="input-contact rounded-1" required placeholder="Enter your email..." />
                    <button type="submit" className="btn-primary">Get started</button>
                </form>
            </div>
            <div className="footer-content pt-5">
                <div className="links-footer d-flex flex-column">
                    <div className="h6 title-footer-link text-light">Services</div>
                    <a href="#" className="footer-link text-capitalize">email marketing</a>
                    <a href="#" className="footer-link text-capitalize">campaigns</a>
                    <a href="#" className="footer-link text-capitalize">branding</a>
                    <a href="#" className="footer-link text-capitalize">offline</a>
                </div>
                <div className="links-footer d-flex flex-column">
                    <div className="h6 title-footer-link text-light">About</div>
                    <a href="#" className="footer-link text-capitalize">our story</a>
                    <a href="#" className="footer-link text-capitalize">benefits</a>
                    <a href="#" className="footer-link text-capitalize">team</a>
                    <a href="#" className="footer-link text-capitalize">careers</a>
                </div>
                <div className="links-footer d-flex flex-column">
                    <div className="h6 title-footer-link text-light">About</div>
                    <a href="#" className="footer-link text-capitalize">our story</a>
                    <a href="#" className="footer-link text-capitalize">benefits</a>
                    <a href="#" className="footer-link text-capitalize">team</a>
                    <a href="#" className="footer-link text-capitalize">careers</a>
                </div>
                <div className="links-footer d-flex flex-column">
                    <div className="h6 title-footer-link text-light">Help</div>
                    <a href="#" className="footer-link text-capitalize">FAQs</a>
                    <a href="#" className="footer-link text-capitalize">contact us</a>
                </div>
                <div className="links-footer d-flex flex-column">
                    <div className="h6 title-footer-link text-light">Socials</div>
                    <div className="icons-footer d-flex gap-3">
                        <a href="#" className="icon-link d-flex justify-content-center align-items-center rounded-circle">
                            <div className="link fs-4">
                                <Instagram color="white" />
                            </div>
                        </a>
                        <a href="#" className="icon-link d-flex justify-content-center align-items-center rounded-circle">
                            <div className="link fs-4">
                                <Twitter color="white" />
                            </div>
                        </a>
                        <a href="#" className="icon-link d-flex justify-content-center align-items-center rounded-circle">
                            <div className="link fs-4">
                                <Facebook color="white" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact