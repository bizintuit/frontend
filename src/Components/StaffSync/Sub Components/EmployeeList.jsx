import React from "react";

const EmployeeList = () => {
    return (
        <div className="h-1/2 w-full flex overflow-x-auto hide-scrollbar">
            <div className="h-full flex gap-1 ">

                <div className="h-full w-96 flex border border-[#646464] p-1 rounded-sm">
                    <div className="h-full w-1/3 flex flex-col border-r border-[#a1a1a1] p-2 gap-2">
                        <div className="h-[10%] w-2/3 flex justify-center items-center text-sm font-semibold rounded-lg bg-[#646464]">
                            Active
                        </div>
                        <img
                            className="w-full bg-black invert rounded-lg"
                            src="./Admin Panel/icons/staff-sync.png"
                            alt=""
                        />
                        <button className="h-[12%] w-full flex justify-center items-center text-sm font-semibold border border-[#646464] rounded-lg">
                            View Profile
                        </button>
                    </div>
                    <div className="h-full w-2/3 p-1">
                        <p className="h-[10%] w-full text-center text-lg font-semibold ">
                            Swastik Sharma
                        </p>
                        <p className="h-[10%] w-full text-center text-sm font-semibold border-b border-[#646464]">
                            CEO
                        </p>
                    </div>
                </div>
                <div className="h-full w-96 flex border border-[#646464] p-1 rounded-sm">
                    <div className="h-full w-1/3 flex flex-col border-r border-[#a1a1a1] p-2 gap-2">
                        <div className="h-[10%] w-2/3 flex justify-center items-center text-sm font-semibold rounded-lg bg-[#646464]">
                            Active
                        </div>
                        <img
                            className="w-full bg-black invert rounded-lg"
                            src="./Admin Panel/icons/staff-sync.png"
                            alt=""
                        />
                        <button className="h-[12%] w-full flex justify-center items-center text-sm font-semibold border border-[#646464] rounded-lg">
                            View Profile
                        </button>
                    </div>
                    <div className="h-full w-2/3 p-1">
                        <p className="h-[10%] w-full text-center text-lg font-semibold ">
                            Swastik Sharma
                        </p>
                        <p className="h-[10%] w-full text-center text-sm font-semibold border-b border-[#646464]">
                            CEO
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmployeeList;
