import React, { useState } from "react";

const Testimonials = () => {
    return (
        <>
            <div className="h-[10%] w-full flex text-center items-center justify-center">
                <h1 className="bg-black h-auto w-full text-3xl font-bold text-white">
                    Testimonials
                </h1>
            </div>
            <div className="h-3/6 w-full flex text-white justify-around rounded-xl mb-20">
                <div className="w-1/6 h-full flex justify-center relative ">
                    <img
                        className="w-[40%] bg-orange-100 border-[7px] border-black rounded-full absolute top-0 z-10"
                        src="./Landing Page/icons/x.png"
                        alt=""
                    />
                    <div className="h-full text-black flex flex-col items-center bg-orange-100 rounded-2xl absolute top-10 z-0">
                        <div className="h-2/6">
                            <img
                                className="h-auto w-1/5 bg-white rounded-full p-2"
                                src="./Landing Page/icons/quotes.png"
                                alt=""
                            />
                        </div>
                        <h4 className="h-1/6 font-bold text-xl">San rancise</h4>
                        <p className="h-1/6 text-[15px]">Chief Assistant Officer</p>
                        <p className="text-[12px] text-center">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore at, iste assumenda nihil error
                            praesentium?"
                        </p>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Testimonials;
