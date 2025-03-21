import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='text-white w-full'>
    <div className='w-full bg-white h-[1px]'></div>
    <div className='flex justify-between font-serif items-center p-8'>
        <div className=' text-[12px] md:text-xl '>&copy; copyright by iNav InfoTech</div>
        <div className='flex gap-8 items-center'>
            <img className='w-7 md:w-8' src="src\assets\icons8-instagram-circle-30 (1).png" alt="" />
            <img className='w-6 md:w-7' src="src\assets\icons8-linkedin-50 (1).png" alt="" />
            <img className='w-6 md:w-7' src="src\assets\icons8-facebook-50 (1).png" alt="" />
            <img className='w-6 md:w-7' src="src\assets\icons8-twitter-circled-50.png" alt="" />
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer