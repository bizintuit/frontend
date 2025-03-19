import React from 'react'
import NavBar from './Components/General/NavBar'
import Xyz from './Components/LandingPage/prompt'
import Hero from './Components/LandingPage/Hero'
import Products from './Components/LandingPage/Products'

const App = () => {
    return (
        <div className='h-screen w-screen'>
            <NavBar/>
            {/* <Xyz/> */}
            {/* <Hero/> */}
            <Products/>
        </div>
    )
}

export default App