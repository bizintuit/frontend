import React, { useState } from "react";

const Testimonials = () => {
  const [status, setStatus] = useState([
    "./Landing Page/icons/star_white.png",
    "./Landing Page/icons/star_white.png",
    "./Landing Page/icons/star_white.png",
    "./Landing Page/icons/star_white.png",
    "./Landing Page/icons/star_white.png",
  ]);
  const ChangeStatus = (number) => {
    let upadtedStatus = [
      "./Landing Page/icons/star_white.png",
      "./Landing Page/icons/star_white.png",
      "./Landing Page/icons/star_white.png",
      "./Landing Page/icons/star_white.png",
      "./Landing Page/icons/star_white.png",
    ];
    for (let index = 0; index <= number; index++) {
      upadtedStatus[index] = "./Landing Page/icons/star_yellow.png";
    }
    setStatus(upadtedStatus);
  };
  return (
    <div className="w-full h-auto text-white flex justify-center rounded-xl  ">
      <div className="w-1/3 h-auto flex flex-col justify-center items-center relative ">
        <img
          className="w-[40%] bg-orange-100 border-[7px] border-black p-2 rounded-full absolute top-0 z-10"
          src="./Landing Page/icons/x.png"
          alt=""
        />
        <div className="p-1 text-black flex flex-col items-center bg-orange-100 rounded-2xl absolute top-10 z-0">
          <div>
            <img
              className="w-[20%] mt-4 bg-white rounded-full "
              src="public\Landing Page\icons\quotes.png"
              alt=""
            />
          </div>
          <h4 className="mt-10 font-bold text-xl">San rancise</h4>
          <p className="pt-4 text-[15px]">Chief Assistant Officer</p>
          <p className="mx-2 my-3 text-[12px] text-center">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            at, iste assumenda nihil error praesentium?"
          </p>
          <div className="h-6 flex text-3xl text-white gap-2">
            <button
              onClick={(event) => {
                ChangeStatus(0);
              }}
              className="h-full"
            >
              <img className="h-full" src={status[0]} alt="" />
            </button>
            <button
              onClick={(event) => {
                ChangeStatus(1);
              }}
              className="h-full"
            >
              <img className="h-full" src={status[1]} alt="" />
            </button>
            <button
              onClick={(event) => {
                ChangeStatus(2);
              }}
              className="h-full"
            >
              <img className="h-full" src={status[2]} alt="" />
            </button>
            <button
              onClick={(event) => {
                ChangeStatus(3);
              }}
              className="h-full"
            >
              <img className="h-full" src={status[3]} alt="" />
            </button>
            <button
              onClick={(event) => {
                ChangeStatus(4);
              }}
              className="h-full"
            >
              <img className="h-full" src={status[4]} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
