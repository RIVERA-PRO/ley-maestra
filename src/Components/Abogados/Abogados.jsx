import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './Abogados.css'
import Subrayado from '../Subrayado/Subrayado'
import img1 from '../../img/team-1.png'
import img2 from '../../img/team-2.png'
import img3 from '../../img/team-3.png'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";





export default function Abogados() {
    const abogados = [
        {
            img: img1,
            title: 'BILLETE DEVIS',
            text: 'Abogado de Negocios',
        },
        {
            img: img2,
            title: 'JONATHAN LEE',
            text: 'Abogado Penalista',
        },
        {
            img: img3,
            title: 'MARCA LEE',
            text: 'Abogado de Negocios',
        },


    ]
    return (
        <div className='AbogadosContain'>
            <TitleComponent title="Nuestros Abogados" />
            <Subrayado />
            <p>Lorem Ipsum Es Simplemente Un Texto De Relleno De La Industria De La Impresión Y La Tipografía. Lorem
                Ipsum Ha Sido El Estándar De La Industria.</p>

            <div className='CardsContain'>

                {abogados.map(item => (
                    <div className='cardAbogados' >
                        <img src={item.img} alt="img" />
                        <div className='textAbogados'>
                            <h3>{item.title}</h3>
                            <h4>{item.text}</h4>
                            <div class="redes-sociales">

                                <a href="#"><i class='fa fa-instagram'></i></a>
                                <a href="#"> <i class='fa fa-linkedin'></i></a>
                                <a href="#"><i class='fa fa-twitter'></i></a>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
