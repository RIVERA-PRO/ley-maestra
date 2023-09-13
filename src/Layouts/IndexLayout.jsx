import React from 'react'
import Header from '../Pages/Header/Header'

import Footer from '../Components/Footer/Footer'
import Developer from '../Components/Developer/Developer'
import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Hero from '../Components/Hero/Hero'
import Cards from '../Components/Cards/Cards'
import About from '../Components/About/About'
import Capacidades from '../Components/Capacidades/Capacidades'
import Areas from '../Components/Areas/Areas'
import Abogados from '../Components/Abogados/Abogados'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Cards />
            <About />
            <Capacidades />
            <Areas />
            <Abogados />
            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
