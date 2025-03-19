import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="bg-zinc-700 p-4 rounded-xl mx-10 mt-5 flex justify-between ">
        <div className="flex items-center gap-4">
          <img className="w-10" src="src/assets/Frame 1.png" alt="" />
          <h3 className="text-white text-2xl">Bizintuit</h3>
        </div>
        <div className="flex gap-9 items-center text-white text-xl">
          <a href="#home">Home</a>
          <a href="#home">Features</a>
          <a href="#home">Product</a>
          <a href="#home">Pricing</a>
          <a href="#home">About</a>
          <button className="border border-white rounded px-2 py-1 hover:bg-white hover:text-black ">
            Log In
          </button>
          <button className="border border-white rounded px-2 py-1 bg-white text-black hover:bg-transparent">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
