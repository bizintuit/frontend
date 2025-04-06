import React from "react";

const ButtonField = ({ buttonIndex, onClickFunc, image, prompt, currentState, changeStateFunc }) => {

    const onClickFunction = () => {
        onClickFunc(prompt)
        changeStateFunc(buttonIndex)
    }
    
    return (
        <>
            {currentState == "On" ? 
            <button
                className="h-8 w-full flex items-center bg-[#1a1a1a] rounded-r-full py-1 px-3 shadow-black shadow-xl text-left text-lg font-button gap-2"
                onClick={onClickFunction}
            >
                <img className="h-full" src={image} alt="" />
                {prompt}
            </button> :
            <button
                className="h-8 w-full flex items-center bg-transparent py-1 px-3 text-left text-medium font-button gap-2"
                onClick={onClickFunction}
            >
                <img className="h-full" src={image} alt="" />
                {prompt}
            </button>}
        </>
    );
};

export default ButtonField;
