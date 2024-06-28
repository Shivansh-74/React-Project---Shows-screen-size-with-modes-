import React, { useState,useEffect } from 'react'

const WindowScreen = (props) => {
    const [widthCount,setWidthCount] = useState(window.screen.width)
    const c = props.color
    const b = props.bcolor
    const actualWidth = () =>{
        setWidthCount(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize",actualWidth)
        return () =>{
            window.removeEventListener("resize",actualWidth)
        }
    }
    )
  return (
    <div className='w-[100%] h-[100vh] bg-[grey] flex justify-center items-center flex-col gap-[20px]' style={{color:c,backgroundColor:b}}>
    <h3 className='text-[3em] font-bold'>The size of the screen is </h3>
    <h2 className='text-[3em] font-bold'>{widthCount}</h2>
    
    </div>
  )
}

export default WindowScreen
