import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import AdminLogin from "./Components/Authentication/AdminLogin";
import CompanySignUp from "./Components/Authentication/CompanySignUp";
import EmployeeLogin from "./Components/Authentication/EmployeeLogin";
import Authentication from "./Components/Authentication";

const App = () => {
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            {/* <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/employee-login" element={<EmployeeLogin />} />
                <Route path="/company-sign-up" element={<CompanySignUp />} />
            </Routes> */}
            <Authentication/>
        </div>
    );
};

export default App;
