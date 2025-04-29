import React, { useEffect, useState } from "react";
import ButtonField from "./ButtonField";

const Options = ({ onClickFunctions, prompts , activeButtonIndex=-1, onClickActive=true, horizontal=true}) => {
    const [buttonState, setButtonState] = useState(Array(onClickFunctions.length).fill("Off"))

    const changeState = (buttonIndex) => {
        if (onClickActive) {
            let updatedButtonStatus = []
            for (let index = 0; index < onClickFunctions.length; index++) {
                if (index == buttonIndex) {
                    updatedButtonStatus[index] = "On"
                }else{
                    updatedButtonStatus[index] = "Off"
                }
            }
            setButtonState(updatedButtonStatus)            
        }
    }

    useEffect(() => {
        if (activeButtonIndex != -1) {
            changeState(activeButtonIndex)
        }
    }, [activeButtonIndex])
        
    return (
        <>
            {onClickFunctions.map((onClickFunction, index) => (
                <ButtonField
                    key={index}
                    buttonIndex={index}
                    onClickFunc={onClickFunction}
                    prompt={prompts[index]}
                    currentState={buttonState[index]}
                    changeStateFunc={changeState}
                    horizontal={horizontal}
                    number_of_buttons={onClickFunctions.length}
                />
            ))}
        </>
    );
}

export default Options