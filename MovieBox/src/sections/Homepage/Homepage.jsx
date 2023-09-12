// import React from 'react'
import './Homepage.css'
import {Hero , Footer , FeaturedMovies} from "../../components/index"







function Homepage() {
  return (
    <section className="homepage-wrapper">
    <Hero />
    <FeaturedMovies />
    <Footer />
    </section>
  )
}

export default Homepage