import React from "react";
import AdminLogin from "./Authentication/AdminLogin";
import CompanySignUp from "./Authentication/CompanySignUp";
import EmployeeLogin from "./Authentication/EmployeeLogin";

const Authentication = ({page}) => {
    return (
        <div className="h-full w-full flex flex-col">
            {
                page == "Company Sign Up" ? <CompanySignUp /> :
                page == "Admin Login" ? <AdminLogin /> :
                page == "Employee Login" ? <EmployeeLogin /> : ""
            }
        </div>
    );
};

export default Authentication;
