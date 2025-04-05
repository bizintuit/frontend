import React from 'react'

const ButtonField = ({onClickFunc, prompt}) => {
  return (
    <>
        <button className='h-auto bg-blue-700 rounded py-1' onClick={onClickFunc}>
            {prompt}
        </button>
    </>
  )
}

export default ButtonField