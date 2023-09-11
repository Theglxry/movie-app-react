// import React from 'react'
import './Homepage.css'
import {Hero , Footer , FeaturedImages} from "../../components/index"







function Homepage() {
  return (
    <section className="homepage-wrapper">
    <Hero />
    <FeaturedImages />
    <Footer />
    </section>
  )
}

export default Homepage