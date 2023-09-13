import React from 'react'
import './Cards.css'
import img from '../../img/service_c.png'
import img2 from '../../img/service_d.png'
import img3 from '../../img/service_e.png'
export default function Cards() {
    return (
        <div className='cardsContain'>
            <div className='card'>
                <img src={img} alt="img" />
                <h3>LITIGIOS ESTABLECIDOS Y
                    COMERCIALES</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">Aprende más</a>
            </div>
            <div className='card'>
                <img src={img2} alt="img" />
                <h3>LITIGIO SOBRE PROPIEDAD INMUEBLES</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">Aprende más</a>
            </div>
            <div className='card'>
                <img src={img3} alt="img" />
                <h3>LITIGIO POR LESIONES PERSONALES</h3>
                <a href="http://" target="_blank" rel="noopener noreferrer">Aprende más</a>
            </div>

        </div>
    )
}
