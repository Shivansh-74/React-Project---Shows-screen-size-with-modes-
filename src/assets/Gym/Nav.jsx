import React from 'react'
// import { AiOutlineMenu } from "react-icons";

const Nav = () => {
  return (
   <>
   <div className='w-[100%] flex justify-between items-center py-[10px]  cursor-pointer '>
   <div className="logo font-bold ml-[2%]">
      GYM
      </div>
      <ul className='mm flex  gap-[20px] mx-[20px] md:none'>
      <li className='hover:scale-[1.2] duration-[300ms]'>Home</li>
      <li className='hover:scale-[1.2] duration-[300ms]'>Contact</li>
      <li className='hover:scale-[1.2] duration-[300ms]'>About</li>
      <li className='hover:scale-[1.2] duration-[300ms]'>Gallary</li>
      <li className='hover:scale-[1.2] duration-[300ms] border border py-[3px] px-[8px] rounded hover:bg-[black] hover:text-[white]'>JOIN</li>
      </ul>
      </div>
      <div className="menu bg-[pink] w-[100%] ">
      <ul className='flex flex-col gap-[20px] mx-[20px] w-[100%] '>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
      <li>Gallary</li>
      <li>Join</li>
      </ul>
      
      </div>
      </>
    
  )
}

export default Nav
