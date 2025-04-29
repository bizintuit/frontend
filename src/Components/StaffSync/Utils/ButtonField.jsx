import React from "react";

const ButtonField = ({
    buttonIndex,
    onClickFunc,
    prompt,
    currentState,
    changeStateFunc,
    horizontal,
    number_of_buttons = 0,
}) => {
    const onClickFunction = () => {
        console.log(prompt);
        onClickFunc();
        changeStateFunc(buttonIndex);
    };
    console.log(horizontal);
    
    return (
        <>
            {horizontal ? (
                currentState == "On" ? (
                    <button
                        className={`h-full w-1/${number_of_buttons} flex items-center justify-center bg-[#1a1a1a] rounded py-1 px-3 shadow-black shadow-xl text-xl font-button gap-2`}
                        onClick={onClickFunction}
                    >
                        {prompt}
                    </button>
                ) : (
                    <button
                        className={`h-full w-1/${number_of_buttons} flex items-center justify-center border border-[#1a1a1a] bg-transparent rounded py-1 px-3 text-lg font-button gap-2`}
                        onClick={onClickFunction}
                    >
                        {prompt}
                    </button>
                )
            ) : currentState == "On" ? (
                <button
                    className={`h-full w-full flex items-center justify-center bg-[#1a1a1a] rounded py-1 px-3 shadow-black shadow-xl text-xl font-button gap-2`}
                    onClick={onClickFunction}
                >
                    {prompt}
                </button>
            ) : (
                <button
                    className={`h-full w-full flex items-center justify-center border border-[#1a1a1a] bg-transparent rounded py-1 px-3 text-lg font-button gap-2`}
                    onClick={onClickFunction}
                >
                    {prompt}
                </button>
            )}
        </>
    );
};

export default ButtonField;
