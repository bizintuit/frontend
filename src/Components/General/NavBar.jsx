import React from "react";

const NavBar = () => {
    return (
        <div className="h-[15%] w-full p-5 text-white">
            <div className="h-full w-full bg-zinc-700 px-4 rounded-xl flex justify-between">
                <div className="h-full w-[40%] flex items-center gap-4">
                    <img className="h-[70%] rounded-full " src=".\Landing Page\icons\logo.png" alt="" />
                    <h3 className="text-2xl">Bizintuit</h3>
                </div>
                <div className="h-full w-[50%] flex justify-between items-center text-xl">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                    <button className="border border-white rounded px-2 py-1 hover:bg-white hover:text-black ">
                        Log In
                    </button>
                    <button className="border border-white rounded px-2 py-1 bg-white text-black hover:bg-transparent hover:text-white">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
