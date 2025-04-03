import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='text-white'>
    <hr className='mt-8' />
    <div className='flex justify-between'>
        &copy; copyright by iNav InfoTech
        <div className='flex gap-8 '>
            <img className='grayscale' src="src\assets\icons8-instagram-94.png" alt="" />
            <img className='' src="src\assets\icons8-linkedin-50.png" alt="" />
            <img className='' src="src\assets\icons8-facebook-50.png" alt="" />
            <img className='' src="src\assets\icons8-x-50.png" alt="" />
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer