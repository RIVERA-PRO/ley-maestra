import React from 'react'
import './Banner.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
export default function Banner() {
    return (
        <div className='BannerBg'>

            <h2>20 Años De Experiencia En Varios Casos.</h2>
            <p>Lorem Ipsum Es Simplemente Un Texto De Relleno De La Industria De La Impresión Y La Tipografía.
                Lorem Ipsum Ha Sido El Estándar De La Industria.</p>
            <Anchor to={`/`} className='consulta-Btn' >Consulta Gratis
            </Anchor>
        </div>
    )
}
