import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './Areas.css'
import Subrayado from '../Subrayado/Subrayado'
import img1 from '../../img/service1.png'
import img2 from '../../img/service2.png'
import img3 from '../../img/service3.png'
import img4 from '../../img/service4.png'
import img5 from '../../img/service5.png'
import img6 from '../../img/service6.png'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";

export default function Areas() {

    const areas = [
        {
            img: img1,
            title: 'Derecho Penal',
            text: 'Nuestros abogados de defensa penal protegerán sus derechos en los tribunales',
        },
        {
            img: img2,
            title: 'Ley De Propiedad',
            text: 'Nuestros abogados de defensa penal protegerán sus derechos en los tribunales',
        },
        {
            img: img3,
            title: 'Lesiones Personales',
            text: 'Nuestros abogados de defensa penal protegerán sus derechos en los tribunales',
        },
        {
            img: img4,
            title: 'Ley Comercial',
            text: 'Nuestros abogados de defensa penal protegerán sus derechos en los tribunales',
        },
        {
            img: img5,
            title: 'Lavado De Dinero',
            text: 'Nuestros abogados de defensa penal protegerán sus derechos en los tribunales',
        },
        {
            img: img6,
            title: 'Delito De Drogas',
            text: 'Nuestros abogados de defensa penal protegerán sus derechos en los tribunales',
        },


    ]
    return (
        <div className='areasContain'>

            <TitleComponent title="Areas De Práctica" />
            <Subrayado />
            <p>Lorem Ipsum Es Simplemente Un Texto De Relleno De La Industria De La Impresión Y La Tipografía. Lorem
                Ipsum Ha Sido El Estándar De La Industria.</p>

            <div className='CardsContain'>

                {areas.map(item => (
                    <div className='card'>
                        <img src={item.img} alt="img" />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>

                        <Anchor to={`/`} >Leer más
                        </Anchor>
                    </div>
                ))}


            </div>
        </div>
    )
}
