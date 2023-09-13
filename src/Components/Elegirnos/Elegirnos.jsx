import React from 'react'
import './Elegirnos.css'
import TitleComponent from '../TitleComponent/TitleComponent'

import Subrayado from '../Subrayado/Subrayado'
import img1 from '../../img/icone_1.png'
import img2 from '../../img/icone_2.png'
import img3 from '../../img/icone_3.png'
import img4 from '../../img/icone_4.png'
import img5 from '../../img/icone_5.png'
import img6 from '../../img/icone_6.png'
import shap from '../../img/shap-center.png'
export default function Elegirnos() {

    const elegir1 = [
        {
            img: img1,
            title: 'GRAN DESCUENTO',
            text: 'Lorem Ipsum es una industria tipográfica ficticia. ',
        },
        {
            img: img2,
            title: 'SERVICIO COMUNITARIO',
            text: 'Lorem Ipsum es una industria tipográfica ficticia. ',
        },
        {
            img: img3,
            title: 'RESPONSABILIDAD PROFESIONAL',
            text: 'Lorem Ipsum es una industria tipográfica ficticia. ',
        },


    ]

    const elegir2 = [

        {
            img: img4,
            title: 'OBTENGA ASESORAMIENTO LEGAL',
            text: 'Lorem Ipsum es una industria tipográfica ficticia. ',
        },
        {
            img: img5,
            title: 'ABOGADOS EXPERTOS',
            text: 'Lorem Ipsum es una industria tipográfica ficticia. ',
        },
        {
            img: img6,
            title: ' DEDICACIÓN A NUESTROS CLIENTES',
            text: 'Lorem Ipsum es una industria tipográfica ficticia. ',
        },

    ]
    return (
        <div className='ElegirnosContain'>
            <TitleComponent title="Por Qué Elegirnos" />
            <Subrayado />
            <p>Lorem Ipsum Es Simplemente Un Texto De Relleno De La Industria De La Impresión Y La Tipografía. Lorem
                Ipsum Ha Sido El Estándar De La Industria.</p>


            <div className='elegirnosCards'>

                <div className='cardsEleg'>

                    {elegir1.map(item => (
                        <div className='deFlexCardRight' >

                            <div className='deColumn'>
                                <h3>{item.title}</h3>
                                <h4>{item.text}</h4>

                            </div>
                            <img src={item.img} alt="img" />
                        </div>
                    ))}


                </div>

                <div className='imgShap'>
                    <img src={shap} alt="shap" />
                </div>


                <div className='cardsEleg'>

                    {elegir2.map(item => (
                        <div className='deFlexCardLeft' >
                            <img src={item.img} alt="img" />
                            <div className='deColumn'>
                                <h3>{item.title}</h3>
                                <h4>{item.text}</h4>

                            </div>

                        </div>
                    ))}


                </div>

            </div>

        </div>
    )
}
