import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InputField from "./Utils/InputField";
import ButtonField from "./Utils/ButtonField";

const EmployeeLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const EmployeeLoginFunction = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/employee_login/",
                {
                    email: email,
                    password: password,
                }
            );

            console.log(response.data);
        } catch (err) {
            console.error("Login failed:", err);
        }
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex-1 w-full flex flex-col text-white border-white justify-center items-center gap-3">
            <div className="h-5/6 w-3/12 flex flex-col items-center border border-[#4e4e4e] rounded-l p-2 gap-4">
                <h2 className="h-2/6 w-full flex justify-center items-center font-bold font-logo text-3xl">
                    Bizintuit
                </h2>

                <div className="h-2/6 w-5/6 flex flex-col gap-2">
                    <InputField
                        label={"Company ID"}
                        type={"text"}
                        placeHolder={"Company ID"}
                        useStateVar={email}
                        useStateFunc={setEmail}
                    />
                    <InputField
                        label={"Email"}
                        type={"text"}
                        placeHolder={"Email"}
                        useStateVar={email}
                        useStateFunc={setEmail}
                    />
                    <InputField
                        label={"Password"}
                        type={"text"}
                        placeHolder={"Password"}
                        useStateVar={password}
                        useStateFunc={setPassword}
                    />
                </div>
                <div className="h-1/6 w-5/6 flex flex-col gap-2">
                    <ButtonField
                        onClickFunc={EmployeeLoginFunction}
                        prompt={"Log in"}
                    />
                </div>
                <div className="h-1/6 w-full flex justify-center rounded-l p-2">
                    <p className="h-full w-full flex justify-center items-center font-normal text-sm">
                        Forgot password?
                    </p>

                    <Link
                        to={"/admin-login"}
                        className="h-full w-full flex justify-center items-center font-normal text-sm"
                    >
                        Admin Login
                    </Link>
                </div>
            </div>
            {/* <div className="h-[10%] w-3/12 flex justify-center border border-[#4e4e4e] rounded-l p-2">
                <p className="h-full w-full flex justify-center items-center font-normal text-l gap-1">
                    Don't have an account?{" "}
                    <span className="text-blue-500 font-semibold">Sign up</span>
                </p>
            </div> */}
        </div>
    );
};

export default EmployeeLogin;
