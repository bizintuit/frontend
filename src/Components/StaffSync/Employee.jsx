import React, { useState } from "react";
import Options from "./Utils/Options";
import EmployeeList from "./Sub Components/EmployeeList";
import SearchField from "./Utils/SearchField";
import AddEmployee from "./Sub Components/AddEmployee";
import UpdateEmployee from "./Sub Components/UpdateEmployee";

const Employee = () => {
    const [currentPanel, setCurrentPanel] = useState("Employee List");
    const [searchField, setSearchField] = useState("");

    return (
        <div className="h-full w-full flex flex-col px-1">
            <div className="h-[10%] w-full flex items-center justify-around gap-2 py-2 ">
                <Options
                    onClickFunctions={[
                        (e) => {
                            setCurrentPanel("Employee List");
                        },
                        (e) => {
                            setCurrentPanel("Add Employee");
                        },
                        (e) => {
                            setCurrentPanel("Update Employee");
                        },
                    ]}
                    prompts={[
                        "Employee List",
                        "Add Employee",
                        "Update Employee",
                    ]}
                    activeButtonIndex={0}
                />
            </div>

            <hr className="border border-[#1a1a1a]" />

            {currentPanel == "Employee List" ? (
                <div className="h-[10%] w-full flex justify-end p-2">
                    <SearchField
                        type={"email"}
                        placeHolder={"Search by Email"}
                        useStateVar={searchField}
                        useStateFunc={setSearchField}
                    />
                </div>
            ) : (
                ""
            )}

            {currentPanel == "Employee List" ? (
                <hr className="border border-[#1a1a1a]" />
            ) : (
                ""
            )}

            <div className="flex flex-col flex-1 w-full gap-2 p-2">
                {currentPanel == "Employee List" ? (
                    <EmployeeList />
                ) : currentPanel == "Add Employee" ? (
                    <AddEmployee />
                ) : currentPanel == "Update Employee" ? (
                    <UpdateEmployee />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Employee;
