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
import Elegirnos from '../Components/Elegirnos/Elegirnos'
import Banner from '../Components/Banner/Banner'
import BanerBg from '../Components/BanerBg/BanerBg'
import Empresas from '../Components/Empresas/Empresas'
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
            <Banner />
            <Elegirnos />
            <BanerBg />
            <Empresas />
            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
