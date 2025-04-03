import React from "react";

const Footer = () => {
    return (
        <>
            <hr className="" />
            <div className="h-auto w-full text-white ">
                    &copy; copyright by iNav InfoTech
                    <div className="flex gap-8 ">
                        <img
                            className="invert"
                            src=".\Landing Page\icons\facebook.png"
                            alt=""
                        />
                        <img
                            className="invert"
                            src=".\Landing Page\icons\instagram.png"
                            alt=""
                        />
                        <img
                            className="invert"
                            src=".\Landing Page\icons\linkedin.png"
                            alt=""
                        />
                        <img
                            className="invert"
                            src=".\Landing Page\icons\x.png"
                            alt=""
                        />
                    </div>
            </div>
        </>
    );
};

export default Footer;
