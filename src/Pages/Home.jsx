import React from 'react'
import Navbar from './../Features/Navbar';
import Hero from '../Features/Hero';
import Fitur from '../Features/Fitur';
import About from '../Features/About';
import Jaralax from '../Features/Jaralax';
import Testimonial from '../Features/Testimonial';
import Pricing from '../Features/Pricing';
import Footer from '../Features/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Fitur/>
        <About/>
        <Jaralax/>
        <Testimonial/>
        <Pricing/>
        <Footer/> 
        
    </div>
  )
}

export default Home
