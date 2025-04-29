import React from "react";

const SearchField = ({ type, placeHolder, useStateVar, useStateFunc }) => {
    return (
        <div className="h-full w-1/4 flex items-center bg-black border border-[#4e4e4e] rounded px-2">
            <button className="h-[90%] w-[20%] p-1">
                <img
                    className="h-full w-full"
                    src=".\Admin Panel\icons\search.png"
                    alt=""
                />
            </button>
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

export default SearchField;
