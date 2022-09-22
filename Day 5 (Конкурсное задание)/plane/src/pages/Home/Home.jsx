import React from 'react'
import Header from './Header/Header'
import Footer from "../../components/Footer/Footer"
import Popular from './Popular/Popular'
import AboutUs from './AboutUs/AboutUs'


const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Popular />
        <AboutUs />
      </main>

      <Footer />
    </>
  )
}

export default Home