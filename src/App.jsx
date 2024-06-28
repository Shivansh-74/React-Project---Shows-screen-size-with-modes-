import { useState } from 'react';
import { AiOutlineMoon,AiOutlineSun  } from "react-icons/ai";
import WindowScreen from './Projects/WindowScreen'
function App() {
const [color ,setColor]=useState("#1B1B1B")
const [bcolor ,setBColor]=useState("white")
const [mode,setMode]=useState(false)
  return (
    <div className="w-[100%]" style={{backgroundColor:bcolor}}>
    <div className='flex justify-end'>
    {!mode?<AiOutlineMoon className='text-[black] text-[3em] mx-[30px]' 
    onClick={()=>{
      setBColor("#1B1B1B")
      setColor("white")
      setMode(!mode)
    }}/>:<AiOutlineSun  className='text-[white] text-[3em] mx-[30px]' 
    onClick={()=>{
      setBColor("white")
      setColor("#1B1B1B")
      setMode(!mode)
    }}/>}
    </div>
  <WindowScreen color={color} bcolor={bcolor}/>
    </div>
  )
}

export default App;