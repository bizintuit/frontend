import React from 'react'

const Products = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center bg-black text-white py-7">
            <div className="h-[10%] w-full flex text-center items-center justify-center">
                <h1 className="bg-black h-auto w-full text-3xl font-bold text-while">
                    Our Products
                </h1>
            </div>

            <div className="flex-1 w-full flex flex-col items-center justify-center p-5 md:p-11 md:w-5/6">
                <div className="h-full w-full justify-center bg-transparent grid grid-cols-3 grid-rows-3">
                    <div className="h-full flex flex-col border-[1px] border-l-transparent border-t-transparent justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-1.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Financial Management and Accounting Software</p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-t-transparent justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-2.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Enterprise Resource Planing (ERP) Software</p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-r-transparent  border-t-transparent justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-3.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Marketing Automation Software</p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-l-transparent justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-4.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Customer Relationship System (CRM) Software</p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-5.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Business Intelligence (BI) and Analytics Software</p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-r-transparent justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-6.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Inventory Management Software</p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-l-transparent border-b-transparent justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-7.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Supply Chain Management (SCM) Software</p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-b-transparent justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-8.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Product Management and Collaboration Software</p>
                    </div>
                    <div className="h-full flex flex-col border-[1px] border-r-transparent border-b-transparent justify-center items-center">
                        <img className='h-[70%] py-1' src=".\Landing Page\Products\product-9.png" alt="" />
                        <p className="h-[30%] text-sm font-medium text-white text-center px-1">Human Resource Management System (HRMS) Software</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Products