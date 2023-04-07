import React from 'react'
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Header from "./components/header/Header"
import Listing from "./components/listing/Listing"
import Footer from "./components/footer/Footer"

const App = () => {
    return (
        <>
        <Nav />
        <About />
        <Header />
        <Listing />
        <Footer />
        </>
    )
}

export default App