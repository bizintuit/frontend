import React, { useState } from "react";
import axios from "axios";
import InputField from "./Utils/InputField";
import ButtonField from "./Utils/ButtonField";

const CompanySignUp = () => {
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const CompanySignUpFunction = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/company_registration/",
                {
                    email: email,
                    company_name: companyName,
                    password: password,
                    password2: confirmPassword,
                }
            );

            alert(response.data.message);
        } catch (err) {
            console.error("Login failed:", err);
        }
        setEmail("");
        setCompanyName("")
        setPassword("");
        setConfirmPassword("")
    };

    return (
        <div className="flex-1 w-full flex flex-col text-white border-white justify-center items-center gap-3">
            <div className="h-5/6 w-6/12 flex flex-col items-center border border-[#4e4e4e] rounded-l p-2 gap-2">
                <h2 className="h-2/6 w-full flex justify-center items-center font-bold font-logo text-3xl">
                    Bizintuit
                </h2>

                <div className="h-2/6 w-5/6 flex gap-2">
                    <div className="h-full w-1/2 flex flex-col gap-2">
                        <InputField
                            label={"Email"}
                            type={"email"}
                            placeHolder={"Email"}
                            useStateVar={email}
                            useStateFunc={setEmail}
                        />
                        <InputField
                            label={"Company Name"}
                            type={"text"}
                            placeHolder={"Company Name"}
                            useStateVar={companyName}
                            useStateFunc={setCompanyName}
                        />
                    </div>
                    <div className="h-full w-1/2 flex flex-col gap-2">
                        <InputField
                            label={"Password"}
                            type={"password"}
                            placeHolder={"Password"}
                            useStateVar={password}
                            useStateFunc={setPassword}
                        />
                        <InputField
                            label={"Confirm Password"}
                            type={"password"}
                            placeHolder={"Confirm Password"}
                            useStateVar={confirmPassword}
                            useStateFunc={setConfirmPassword}
                        />
                    </div>
                </div>
                <div className="h-1/6 w-5/6 flex flex-col gap-2">
                    <ButtonField onClickFunc={CompanySignUpFunction} prompt={"Sign up"} />
                </div>
                <div className="h-1/6 w-5/6 flex flex-col">
                    <p className="h-full w-full text-center font-normal text-sm">
                        People who use our service may have uploaded your
                        contact information to Instagram.
                        <br />
                        Learn More By signing up, you agree to our Terms ,
                        Privacy Policy and Cookies Policy .
                    </p>
                </div>
            </div>
            <div className="h-[10%] w-6/12 flex justify-center border border-[#4e4e4e] rounded-l p-2">
                <p className="h-full w-full flex justify-center items-center font-normal text-l gap-1">
                    Already have an account?{" "}
                    <span className="text-blue-500 font-semibold">Sign in</span>
                </p>
            </div>
        </div>
    );
};

export default CompanySignUp;
