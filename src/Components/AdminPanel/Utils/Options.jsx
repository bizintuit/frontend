import React, { useEffect, useState } from "react";
import ButtonField from "./ButtonField";

const Options = ({ onClickFunctions, images, prompts , activeButtonIndex=-1, onClickActive=true}) => {
    const [buttonState, setButtonState] = useState(Array(images.length).fill("Off"))

    const changeState = (buttonIndex) => {
        if (onClickActive) {
            let updatedButtonStatus = []
            for (let index = 0; index < images.length; index++) {
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
                    image={images[index]}
                    prompt={prompts[index]}
                    currentState={buttonState[index]}
                    changeStateFunc={changeState}
                />
            ))}
        </>
    );
};

export default Options;
