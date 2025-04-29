import React, { useState } from "react";
import Options from "./Utils/Options";
import SearchField from "./Utils/SearchField";
import List from "./Utils/List";

const Department = () => {
    const [searchField, setSearchField] = useState("");

    return (
        <div className="h-full w-full flex flex-col px-1">
            <div className="h-[10%] w-full flex items-center justify-around gap-2 py-2 ">
                <Options
                    onClickFunctions={[console.log, console.log, console.log]}
                    prompts={["Department List", "Add Department", "RBAC"]}
                    activeButtonIndex={0}
                />
            </div>
            <hr className="border border-[#1a1a1a]" />

            <div className="h-[10%] w-full flex justify-end p-2">
                <SearchField
                    type={"email"}
                    placeHolder={"Search by Email"}
                    useStateVar={searchField}
                    useStateFunc={setSearchField}
                />
            </div>

            <hr className="border border-[#1a1a1a]" />

            <div className="h-[80%] w-full flex px-1 py-2 ">
                <List />
            </div> 

        </div>
    );
};

export default Department;
