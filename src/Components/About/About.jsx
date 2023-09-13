import React from 'react'
import './About.css'
import about from '../../img/about-right.png'
import Subrayado from '../Subrayado/Subrayado'
import { Link as Anchor, } from "react-router-dom";
export default function About() {
    return (
        <div className='aboutContain'>

            <div className='aboutext'>
                <h2>BIENVENIDO A ACERCA DE NOSOTROS?</h2>
                <Subrayado />
                <p>Lorem Ipsum Es Simplemente Un Texto De Relleno De La Industria De La Impresión Y La Composición Tipográfica. Lorem Ipsum Ha Sido El Estandarte De La Industria</p>
                <Anchor className='btn-next'>Leer Más</Anchor>
            </div>

            <div className='img'>
                <img src={about} alt="about" />
            </div>





        </div>
    )
}
