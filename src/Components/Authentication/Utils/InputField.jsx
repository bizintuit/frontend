import React from "react";

const InputField = ({label, type, placeHolder, useStateVar, useStateFunc}) => {
    return (
        <div className="h-12 flex flex-col bg-[#1a1a1a] border border-[#4e4e4e] rounded">
            {useStateVar ? (
                <label className="h-auto text-sm px-2 text-[#b6b6b6]">
                    {label}
                </label>
            ) : ("")}
            <input
                className="h-full w-full bg-transparent text-white text-medium px-2 rounded outline-none "
                onChange={(event) => useStateFunc(event.target.value)}
                value={useStateVar}
                type={type}
                placeholder={placeHolder}
            />
        </div>
    );
};

export default InputField;
