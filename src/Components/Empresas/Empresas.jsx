import React from 'react'
import './Empresas.css'
import img from '../../img/client_logo/client_logo-1.png'
import img2 from '../../img/client_logo/client_logo-2.png'
import img3 from '../../img/client_logo/client_logo-3.png'
import img4 from '../../img/client_logo/client_logo-4.png'
import img5 from '../../img/client_logo/client_logo-5.png'
export default function Empresas() {

    const clients = [img, img2, img3, img4, img5]
    return (
        <div className='EmpresasContain'>

            {clients.map(item => (
                <img src={item} alt="img" />
            ))}

        </div>
    )
}
