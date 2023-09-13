import React from 'react'
import './Hero.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
export default function Hero() {
    return (
        <div className='heroContain'>

            <div className='heroText'>
                <div className='deFlex'>
                    <span>  </span>
                    <div className='deColumn'>
                        <h2>UN OBJETIVO SIMPLE:</h2>
                        <h1>Trabajando Incansablemente
                            Hacia Resoluciones Exitosas</h1>
                    </div>
                </div>
                <p>LOREM IPSUM ES SIMPLEMENTE UN TEXTO DE RELLENO DE LA
                    INDUSTRIA DE LA IMPRESIÓN Y LA TIPOGRAFÍA. LOREM IPSUM HA SIDO EL TEXTO DE RELLENO ESTÁNDAR DE LA INDUSTRIA
                    DESDE EL SIGLO XVI.</p>


                <Anchor onClick={() => { document.querySelector('.aboutContain').scrollIntoView({ behavior: 'smooth' }); }} className='btn-next'>Empezar</Anchor>


            </div>

        </div >
    )
}
