import React from 'react'
import About from './sections/About'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Working from './sections/Working'
import Testimonial from './sections/testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Contact'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Working/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

