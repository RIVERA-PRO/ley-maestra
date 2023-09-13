import React from 'react'
import './Footer.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";


export default function Footer() {
    return (
        <div className='FooterContain'>

            <div className='footerText'>
                <h1 className='logo'><span>L</span>ey Maestra</h1>

                <p>Es un hecho establecido desde hace mucho tiempo que el
                    lector se distraerá con el
                    contenido legible.</p>
                <div class="redes-sociales-footer">

                    <a href="#"><i class='fa fa-instagram'></i></a>
                    <a href="#"> <i class='fa fa-linkedin'></i></a>
                    <a href="#"><i class='fa fa-twitter'></i></a>
                </div>
            </div>

            <div className='footerText'>
                <h3>ENLACES RÁPIDOS</h3>

                <Anchor to={`/`} >HOGAR</Anchor>
                <Anchor to={`/`} >LA FIRMA</Anchor>
                <Anchor to={`/`} >AREAS DE PRÁCTICA</Anchor>
                <Anchor to={`/`} >NOTICIAS Y RECURSOS</Anchor>
                <Anchor to={`/`} >CONTACTO</Anchor>

            </div>

            <div className='footerText'>
                <h3>DATOS DE CONTACTO</h3>

                <Anchor to={`/`} >505 Thornall St #301,</Anchor>
                <Anchor to={`/`} >Edison, Nueva Jersey 08837, EE. UU.</Anchor>
                <Anchor to={`/`} >consulta@demo.com</Anchor>
                <Anchor to={`/`} >+1- 982-8-587 452</Anchor>

            </div>

            <div className='footerText'>
                <h3>SUSCRIBIR</h3>

                <form action="" className='form'>
                    <input type="email" placeholder='Email' />
                    <button>Suscribir</button>
                </form>



            </div>

        </div>
    )
}
