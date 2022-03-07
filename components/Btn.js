import React from 'react'

function Btn({title, menu}) {
  return (
    <div className='
    h-fit
    w-fit
    bg-black text-white border border-black rounded
    py-1 px-2 m-1
    flex justify-center align-center 
    cursor-pointer 
    hover:bg-white hover:text-black
    duration-300 transition-all
    shadow-md
    '>
        {title}
    </div>
  )
}

export default Btn