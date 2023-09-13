import React from 'react'
import Header from '../Pages/Header/Header'

import Footer from '../Components/Footer/Footer'
import Developer from '../Components/Developer/Developer'
import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Hero from '../Components/Hero/Hero'
import Cards from '../Components/Cards/Cards'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Cards />
            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
