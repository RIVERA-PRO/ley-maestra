import React from 'react'
import './TitleComponent.css'
export default function TitleComponent({ title }) {
    return (
        <h2 className='titleComponent'>
            {title}
        </h2>
    )
}
