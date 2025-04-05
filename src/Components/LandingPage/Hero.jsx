import React from "react";

const Hero = () => {
  return (
    <div className="m-20 text-[rgb(245,245,220)] text-center flex flex-col gap-10">
      <h1 className=" text-4xl font-bold  leading-relaxed lg:text-7xl lg:leading-relaxed animate-bounce">
        Empower Businesses With <br /> AI Intelligent Management
      </h1>
      <p className="text-center leading-relaxed lg:text-2xl lg:leading-relaxed">
        Using these tools, a company can effectively manage core functions such
        as finance, customer relationships, HR, supply chain, companies
        canciently, improvIntegratinge decisions-making, and marketing. By 
        these tools or adopting an all-in-one ERP system companies can enhance
        effi maintain better control over operations.
      </p>
      <div>
        <button className="px-4 py-2 text-center text-black lg:text-2xl bg-[#f5f5dc] rounded-md font-bold ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
