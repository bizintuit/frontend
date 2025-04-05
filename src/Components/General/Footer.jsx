import React from "react";

const Footer = () => {
    return (
        <>
            <hr className="" />
            <div className="h-auto w-full text-white flex justify-between items-center px-4">
                <p className="w-[80%]">
                    &copy; copyright by &nbsp;
                    <a
                        href="https://inavinfotech.web.app"
                        className="text-orange-600"
                    >
                        iNav InfoTech
                    </a>
                </p>
                <div className="flex h-[80%] w-[20%] justify-around py-2">
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
