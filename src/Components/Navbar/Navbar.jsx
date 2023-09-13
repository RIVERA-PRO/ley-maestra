import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";



export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();


    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 130) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    return (
        <header className={scrolled ? "navbar scrolled " : "navbar"}>
            <nav>
                <h1 className='logo'><span>L</span>ey Maestra</h1>
                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <h1 className='logo-nav'>Ley Maetra</h1>

                    <div className='enlaces'>


                        <Anchor to={`/`} >HOGAR
                        </Anchor>
                        <Anchor onClick={() => { document.querySelector('.PortfolioContain').scrollIntoView({ behavior: 'smooth' }); }} >ACERCA DE
                        </Anchor>
                        <Anchor onClick={() => { document.querySelector('.ServiciosContain').scrollIntoView({ behavior: 'smooth' }); }} >SERVICIOS
                        </Anchor>
                        <Anchor onClick={() => { document.querySelector('.TestimoniosConatin').scrollIntoView({ behavior: 'smooth' }); }} >ELEMENTOS
                        </Anchor>

                        <Anchor onClick={() => { document.querySelector('.ContactoContainComponent').scrollIntoView({ behavior: 'smooth' }); }} >BLOG
                        </Anchor>
                        <Anchor onClick={() => { document.querySelector('.ContactoContainComponent').scrollIntoView({ behavior: 'smooth' }); }} className='contact-BTN'>CONTACTO</Anchor>





                    </div>



                </div>







            </nav>


        </header>
    );
}
