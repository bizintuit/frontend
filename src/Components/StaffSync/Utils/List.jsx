import React from "react";

const List = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-9 w-full flex border border-[#646464] rounded-t-md p-1">
                <div className="h-full w-full border-r border-[#646464]"></div>
                <div className="h-full w-full border-r border-[#646464]"></div>
                <div className="h-full w-full border-r border-[#646464]"></div>
                <div className="h-full w-full"></div>
            </div>
            <div className="h-full w-full overflow-y-auto hide-scrollbar">
                <div className="w-full flex flex-col"> 
                    <div className="h-9 w-full flex border-r border-b border-l border-[#646464] rounded-t-sm p-1">
                        <div className="h-full w-full border-r border-[#646464]"></div>
                        <div className="h-full w-full border-r border-[#646464]"></div>
                        <div className="h-full w-full border-r border-[#646464]"></div>
                        <div className="h-full w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
