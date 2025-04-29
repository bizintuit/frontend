import React, { useState } from "react";
import Options from "./Utils/Options";
import Departments from "./Department";
import Attendance from "./Attendance";
import Leaves from "./Leaves";
import Reports from "./Reports";
import Employee from "./Employee";
import Dashboard from "./Dashboard";

const AdminStaffSync = () => {
    const [currentPanel, setCurrentPanel] = useState("Dashboard");

    document.title = "Admin Panel - Staff Sync"; 

    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-[8%] w-full flex px-1">
                <div className="w-auto flex gap-2">
                    <img
                        className=""
                        src="./Admin Panel/icons/staff-sync.png"
                        alt=""
                    />
                    <div className="h-full w-full flex flex-col justify-center">
                        <p className="text-sm font-logo"> Staff Sync </p>
                        <span className="text-xs text-[#757575]">
                            Employee Management System
                        </span>
                    </div>
                </div>
            </div>
            <hr className="border border-[#1a1a1a]" />

            <div className="h-[91%] w-full flex">
                <div className="h-full w-[15%] flex flex-col border-r-2 border-[#1a1a1a] justify-around gap-2 p-2">
                    <Options
                        onClickFunctions={[
                            (e) => {
                                setCurrentPanel("Dashboard");
                            },
                            (e) => {
                                setCurrentPanel("Employee");
                            },
                            (e) => {
                                setCurrentPanel("Departments");
                            },
                            (e) => {
                                setCurrentPanel("Attendance");
                            },
                            (e) => {
                                setCurrentPanel("Leaves");
                            },
                            (e) => {
                                setCurrentPanel("Reports");
                            },
                        ]}
                        prompts={[
                            "Dashboard",
                            "Employee",
                            "Departments",
                            "Attendance",
                            "Leaves",
                            "Reports",
                        ]}
                        activeButtonIndex={0}
                        horizontal={false}
                    />
                </div>
                <div className="h-full w-[85%] flex">
                    {currentPanel == "Dashboard" ? (
                        <Dashboard />
                    ) : currentPanel == "Employee" ? (
                        <Employee />
                    ) : currentPanel == "Departments" ? (
                        <Departments />
                    ) : currentPanel == "Attendance" ? (
                        <Attendance />
                    ) : currentPanel == "Leaves" ? (
                        <Leaves />
                    ) : currentPanel == "Reports" ? (
                        <Reports />
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminStaffSync;
