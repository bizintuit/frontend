import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Authentication from "./Components/Authentication";
import AdminPanel from "./Components/AdminPanel";

const App = () => {
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            {/* <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/admin-login" element={<Authentication page={"Admin Login"}/>} />
                <Route path="/employee-login" element={<Authentication page={"Employee Login"}/>} />
                <Route path="/company-sign-up" element={<Authentication page={"Company Sign Up"}/>} />
                <Route path="/admin-panel" element={<AdminPanel />} />
            </Routes> */}
            <AdminPanel/>
        </div>
    );
};

export default App;
