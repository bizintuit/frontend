import React from "react";
import NavBar from "./Components/General/NavBar";
import Contact from "./Components/LandingPage/Contact";
import Products from "./Components/LandingPage/Products";
import Features from "./Components/LandingPage/Features";
import Prompt from "./Components/LandingPage/prompt";

const App = () => {
    return (
        <div className="h-screen w-screen">
            {/* <NavBar/> */}
            {/* <Contact/> */}
            {/* <Products/> */}
            <Prompt/>
            {/* <Features/> */}
        </div>
    );
};

export default App;