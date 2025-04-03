import React from "react";

const Products = () => {
    return (
        <div className="h-auto w-full flex flex-col items-center justify-center bg-black text-white py-7">
            <div className="h-[10%] w-full flex text-center items-center justify-center">
                <h1 className="h-auto w-full text-3xl font-bold bg-black text-while">
                    Our Features
                </h1>
            </div>

            <div className="flex-1 w-full flex flex-col items-center justify-center p-5 md:p-11 md:w-5/6">
                <div className="h-full w-[full] justify-center bg-transparent grid grid-cols-3 grid-rows-3">
                    <div className="h-full flex flex-col border-[1px] border-l-transparent border-t-transparent justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-1.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Financial Management and Accounting Software
                        </p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-t-transparent justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-2.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Enterprise Resource Planing (ERP) Software
                        </p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-r-transparent  border-t-transparent justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-3.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Marketing Automation Software
                        </p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-l-transparent justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-4.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Customer Relationship System (CRM) Software
                        </p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-5.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Business Intelligence (BI) and Analytics Software
                        </p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-r-transparent justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-6.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Inventory Management Software
                        </p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-l-transparent border-b-transparent justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-7.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Supply Chain Management (SCM) Software
                        </p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-b-transparent justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-8.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Product Management and Collaboration Software
                        </p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-r-transparent border-b-transparent justify-center items-center">
                        <img
                            className="h-[70%] py-1"
                            src=".\Landing Page\Features\feature-9.png"
                            alt=""
                        />
                        <p className="h-[30%] text-sm font-medium text-white text-center">
                            Human Resource Management System (HRMS) Software
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
