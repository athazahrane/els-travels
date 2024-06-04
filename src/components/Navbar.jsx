// import main
import React, { useEffect, useState } from 'react'

// css
import '../css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// import icon
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons'

function Navbar() {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        let prevScrollpos = 0;
        const navbar = document.querySelector('.navbar-container');
        navbar.classList.add('show')

        const handleScroll = () => {
            let currentScrollpos = window.pageYOffset;

            if (prevScrollpos > currentScrollpos) {
                navbar.classList.add('show');
            } else {
                navbar.classList.remove('show');
            }

            if ( prevScrollpos > 300) {
                navbar.classList.add('scroll')
            } else {
                navbar.classList.remove('scroll')
            }

            prevScrollpos = currentScrollpos <= 0 ? 0 : currentScrollpos; 
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCheckboxChange = () => {
        const navMenu = document.querySelector('.navbar-links')

        if (isChecked) {
            navMenu.classList.remove('show')
        } else {
            navMenu.classList.add('show')
        }

        setIsChecked(!isChecked)
    }
    return (
        <div className="navbar-container text-light">
            <a href="#" className="navbar-brand text-capitalize">el's <span className="primary">travels</span></a>
            <div className="navbar-links d-flex gap-4 ">
                <a href="#home" className="nav-link text-capitalize">home</a>
                <a href="#informations" className="nav-link text-capitalize">information</a>
                <a href="#aboutus" className="nav-link text-capitalize">about us</a>
                <a href="#culture" className="nav-link text-capitalize">culture</a>
                <a href="#contactus" className="nav-link text-capitalize">contact us</a>
            </div>
            <div className="info-nav d-flex align-items-center gap-4">
                <h6 className='info-title text-capitalize'>follow us</h6>
                <div className="icons-nav d-flex gap-3">
                    <a href="#" className='icon-item'>
                        <Instagram color='white' />
                    </a>
                    <a href="#" className='icon-item'>
                        <Facebook color='white' />
                    </a>
                    <a href="#" className='icon-item'>
                        <Twitter color='white' />
                    </a>
                </div>
            </div>
            {/* hamburger */}
            <label class="hamburger">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <svg viewBox="0 0 32 32">
                    <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                    <path class="line" d="M7 16 27 16" />
                </svg>
            </label>
        </div>
    )
}
export default Navbar