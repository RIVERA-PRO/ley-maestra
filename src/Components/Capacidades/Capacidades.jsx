import React from 'react'
import './Capacidades.css'
import tilde from '../../img/right.png'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";

export default function Capacidades() {
    return (
        <div className='capacidadesContain'>

            <div className='capacidadesText'>
                <h2>NUESTRAS CAPACIDADES</h2>
                <p>Lorem Ipsum Es Simplemente Un Texto De Relleno De La
                    Industria De La Impresión Y La Composición Tipográfica.</p>

                <Anchor to={`/`} className='tilde' > <img src={tilde} alt="tilde" /> Lorem Ipsum Es Simplemente Texto De Relleno De La Impresión.  </Anchor>
                <Anchor to={`/`} className='tilde' > <img src={tilde} alt="tilde" /> Lorem Ipsum Es Simplemente Texto De Relleno De La Impresión.  </Anchor>
                <Anchor to={`/`} className='tilde' > <img src={tilde} alt="tilde" /> Lorem Ipsum Es Simplemente Texto De Relleno De La Impresión.  </Anchor>
                <Anchor to={`/`} className='tilde' > <img src={tilde} alt="tilde" /> Lorem Ipsum Es Simplemente Texto De Relleno De La Impresión.  </Anchor>
                <Anchor to={`/`} className='tilde' > <img src={tilde} alt="tilde" /> Lorem Ipsum Es Simplemente Texto De Relleno De La Impresión.  </Anchor>
                <Anchor to={`/`} className='tilde' > <img src={tilde} alt="tilde" /> Lorem Ipsum Es Simplemente Texto De Relleno De La Impresión.  </Anchor>
                <Anchor to={`/`} className='tilde' > <img src={tilde} alt="tilde" /> Lorem Ipsum Es Simplemente Texto De Relleno De La Impresión.  </Anchor>


            </div>
            <div className='imgCapacidades'>

            </div>

        </div>
    )
}
