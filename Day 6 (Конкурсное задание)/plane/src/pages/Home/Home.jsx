import React from 'react'
import Header from './Header/Header'
import Footer from "../../components/Footer/Footer"
import Popular from './Popular/Popular'
import AboutUs from './AboutUs/AboutUs'
import WriteUs from './WriteUs/WriteUs'
import FAQ from './FAQ/FAQ'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Popular />
        <AboutUs />
        <WriteUs />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default Home