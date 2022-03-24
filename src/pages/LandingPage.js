import React from 'react'
import Banner from '../components/Banner'
import BannerCard from '../components/BannerCard'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Plan from '../components/Plan'
import Testimonials from '../components/Testimonials'

const LandingPage = () => {
  return (
      <>
        <Banner />
        <BannerCard />
        <Features />
        <Plan />
        <Map />
        <Testimonials />
        <Footer />
      </>
  )
}

export default LandingPage