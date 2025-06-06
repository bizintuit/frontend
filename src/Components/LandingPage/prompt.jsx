import React from "react";

const Prompt = () => {
    return (
        <div className="h-auto w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden">
            <div className="w-full text-center">
                <h1 className="bg-black w-full text-4xl md:text-5xl font-bold text-neutral-200 relative z-10">
                    “Your Journey to <br />
                    Success Begins Here”
                </h1>
            </div>

            <div className="flex flex-col items-center w-1/2 h-[250px] justify-center">
                <div className="justify-center grid-perspective w-full h-full bg-transparent grid-cols-5 grid-rows-3 grid">
                    <div className=" border-[1px] border-t-transparent border-opacity-50"></div>
                    <div className=" border-[1px] border-t-transparent border-opacity-50"></div>
                    <div className=" border-[1px] border-t-transparent border-opacity-50"></div>
                    <div className=" border-[1px] border-t-transparent border-opacity-50"></div>
                    <div className=" border-[1px] border-t-transparent border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                    <div className=" border-[1px] border-opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default Prompt;
