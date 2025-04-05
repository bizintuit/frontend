import React from "react";

const Contact = () => {
    return (
        <>
            <div className="bg-black text-white flex justify-center">
                <div className="max-w-5xl w-full flex flex-col md:flex-row  justify-center gap-36 p-6">
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <form className="space-y-6 w-full max-w-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter a valid email address"
                                    className="w-full p-3 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter your address"
                                    className="w-full p-3 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your phone no"
                                    className="w-full p-3 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                                />
                            </div>
                            <textarea
                                placeholder="Enter your message"
                                className="w-full p-3 h-28 bg-black border border-gray-400 rounded-sm text-white text-sm focus:outline-none"
                            ></textarea>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-32 md:w-32 py-2 bg-gray-200 text-black rounded-sm text-xl font-semibold hover:bg-gray-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 text-center flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-300 text-sm leading-6 max-w-md">
                            We're here to help! Whether you have questions, need
                            support, or want to collaborate, our team is ready
                            to assist you. We strive to provide quick and
                            effective solutions tailored to your needs. Reach
                            out to us via phone, email, or social media—we look
                            forward to connecting with you!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
