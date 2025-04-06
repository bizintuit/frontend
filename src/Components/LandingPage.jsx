import React from 'react'
import NavBar from './LandingPage/Utils/NavBar';
import Footer from './LandingPage/Utils/Footer';
import Hero from './LandingPage/Hero';
import Features from './LandingPage/Features';
import Prompt from './LandingPage/Prompt';
import Contact from './LandingPage/Contact';
import Products from './LandingPage/Products';
import Testimonials from './LandingPage/Testimonials';

const LandingPage = () => {
    return (
        <div className='h-full w-full'>
            <NavBar/>
            <Hero/>
            <Prompt/>
            <Products/>
            <Features/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default LandingPage