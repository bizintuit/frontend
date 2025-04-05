import React from 'react'
import NavBar from './General/NavBar';
import Footer from './General/Footer';
import Hero from './LandingPage/Hero';
import Features from './LandingPage/Features';
import Prompt from './LandingPage/Prompt';
import Contact from './LandingPage/Contact';
import Products from './LandingPage/Products';

const LandingPage = () => {
    return (
        <div className='h-full w-full'>
            <NavBar/>
            <Hero/>
            <Products/>
            <Features/>
            <Prompt/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default LandingPage