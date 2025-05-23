import React, { useState } from "react";
import SearchField from "./AdminPanel/Utils/SearchField";
import Options from "./AdminPanel/Utils/Options";
import AdminStaffSync from "./StaffSync/adminStaffSync";

const AdminPanel = () => {
    const [searchInput, setSearchInput] = useState("");
    const [currentPanel, setCurrentPanel] = useState("Admin Dashboard");

    document.title = "Admin Panel"; 

    return (
        <div className="h-full w-full flex text-white ">
            <div className="h-full w-2/12 flex flex-col bg-[#0c0c0c]">
                <div className="h-[10%] flex items-center p-2 gap-2">
                    <img className="h-full" src=".\logo.png" alt="" />
                    <div className="h-full flex flex-col justify-center">
                        <h2 className="text-medium font-logo">Bizintuit</h2>
                        <h3 className="text-xs text-[#757575]">
                            All-in-one Business Tool
                        </h3>
                    </div>
                </div>
                <div className="h-[15%] flex items-center p-2">
                    <SearchField
                        type={"text"}
                        placeHolder={"Search"}
                        useStateVar={searchInput}
                        useStateFunc={setSearchInput}
                    />
                </div>
                <div className="h-[45%] flex flex-col items-center p-2 gap-1">
                    <Options
                        onClickFunctions={[
                            () => {setCurrentPanel("Admin Dashboard")},
                            () => {setCurrentPanel("Staff Sync")},
                            () => {setCurrentPanel("Finance Sync")},
                        ]}
                        images={[
                            "./Admin Panel/icons/dashboard.png",
                            "./Admin Panel/icons/staff-sync.png",
                            "./Admin Panel/icons/finance-sync.png",
                        ]}
                        prompts={["Dashboard", "Staff Sync", "Finance Sync"]}
                        activeButtonIndex={1}
                    />
                </div>
                <div className="h-[3%] w-full items-center flex px-2 bg-transparent">
                    <hr className="w-full border border-[#303030] " />
                </div>
            </div>
            <div className="h-full w-10/12 flex bg-[#0c0c0c] pt-3 pr-2">
                <div className="h-full w-full flex bg-black rounded-t-md">
                    {currentPanel == "Admin Dashboard" ? "" : currentPanel == "Staff Sync" ? <AdminStaffSync/> : ""}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
