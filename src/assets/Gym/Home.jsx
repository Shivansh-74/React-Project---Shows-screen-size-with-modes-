import React from 'react'
import gym2 from '../assets/gym2.jpg'

const Home = () => {
  return (
    <div className='grid w-[100%] h-[80vhvh] '>
      <div className='main w-[100%] h-[70vh] bg-cover  h-screen bg-center flex justify-center md:justify-start ' style={{backgroundImage:`url(${gym2})`}} >
      <div className=' text w-[60%]  md:ml-[10%] mt-[10%] flex flex-col md:max-w-text-centeritems-center'>
     
      <h1 className='text-white md:text-4xl text-2xl font-bold py-[10px] md:min-w-text-center'>Keep Your Body<br /> <span className='text-white md:text-6xl text-3xl font-bold py-[10px] '>Burning</span></h1>
      <h5 className='text-white text-[0.6rem] md:text-[1rem] md:max-w-text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptate, possimus laborum, porro odit esse natus nobis repudiandae </h5>
      <div className='w-100% mt-[4%]' >
      <button className='p-[5px] border border-solid rounded bg-[white] hover:bg-black hover:text-[white] duration-[300ms] font-bold'>Join Now</button>
      </div>
      </div>
      </div>
      
      <div className="programs py-[4px] bg-[white] w-[100%] grid place-items-center">
      <h1 className='text-center font-bold text-3xl py-[3%]'>OUR PROGRAMS</h1>
      <div className="programs md:grid  w-[90%] grid-cols-3 gap-[10px] my-[10px] flex flex-col ">
      <div className="p1 md:col-span-1 border border-black text-center  text-2xl h-[300px] flex flex-col justify-center items-center gap-[20px] mx-[20px] hover:scale-[1.06] duration-[500ms]"><h1 className='font-bold'>Cardio</h1><div className='w-[80%] h-[1px] bg-[black]'></div>
      <div className='w-[70%]  '><p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatib
      </p>
      <button className='p-[5px] border border-solid rounded bg-[white] hover:bg-black hover:text-[white] duration-[300ms] font-bold my-[20px]'>Join now</button>
      </div>
      </div>
      <div className="p1 md:col-span-1 border border-black text-center  text-2xl h-[300px] flex flex-col justify-center items-center gap-[20px] mx-[20px] hover:scale-[1.06] duration-[500ms]"><h1 className='font-bold '>Physical Fitness</h1><div className='w-[80%] h-[1px] bg-[black]'></div>
      <div className='w-[70%]  '><p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatib
      </p>
      <button className='p-[5px] border border-solid rounded bg-[white] hover:bg-black hover:text-[white] duration-[300ms] font-bold my-[20px]'>Join now</button>
      </div>
      </div>
      <div className="p1 md:col-span-1 border border-black text-center  text-2xl h-[300px] flex flex-col justify-center items-center gap-[20px] mx-[20px] hover:scale-[1.06] duration-[500ms]"><h1 className='font-bold'>WeightLifting</h1>
      <div className='w-[80%] h-[1px] bg-[black]'></div>
      <div className='w-[70%]  '>
      <p className='text-[0.9em]'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatib
      </p>
      <button className='p-[5px] border border-solid rounded bg-[white] hover:bg-black hover:text-[white] duration-[300ms] font-bold my-[20px]'>Join now</button>
      </div>
      </div>
      </div>
      </div>


     <div className='py-4 grid grid place-items-center'>
     <div className='w-[90%] grid grid-cols-3 '>
     <div className="a col-span-1 border border-black h-[300px]">
     <img src="https://athleticsweekly.com/wp-content/uploads/2020/11/PT-image-via-OriGym.jpg" alt="" className='h-[300px]' />
     </div>
     <div className="a col-span-2 border border-black h-[300px] text-center">
     <h1 className='py-[15px] font-bold text-2xl'>Personal Training</h1>
     <div className='w-[100%] h-[1px] bg-[black]'></div>
     <p className='py-[30px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elitbr
     . Distinctio debitis similique iste doloremque <br />et qui suscipit delectus ab necessitatibus deleniti.</p>
     
     </div>
     </div>
     </div>


     <div className='py-4 grid grid place-items-center'>
     <div className='w-[90%] grid grid-cols-3 '>
     <div className="a col-span-2 border border-black h-[300px] text-center"><h1 className='py-[15px] font-bold text-2xl'>Group Training</h1>
     <div className='w-[100%] h-[1px] bg-[black]'></div>
     <p className='py-[30px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elitbr
     . Distinctio debitis similique iste doloremque <br />et qui suscipit delectus ab necessitatibus deleniti.</p></div>
     <div className="a col-span-1 border border-black h-[300px]">
     <img src="https://www.thfi.com/cdn/shop/articles/How_to_lead_group_training_sessions-Blog-1200x800px-W39.jpg?v=1705484603&width=1200" alt="" className='h-[300px]'/>
     </div>
     </div>
     </div>


     <div className='py-4 grid grid place-items-center'>
     <div className='w-[90%] grid grid-cols-3 '>
     <div className="a col-span-1 border border-black h-[300px]">
     <img src="https://hips.hearstapps.com/hmg-prod/images/treadmill-testing-0367-1578930314.jpg?crop=0.889xw:1xh;center,top&resize=1200:*" alt="" className='h-[300px]'/>
     </div>
     <div className="a col-span-2 border border-black h-[300px] text-center flex flex-col align-center"><h1 className='py-[15px] font-bold text-2xl'>Cardio Training</h1>
     <div className='w-[100%] h-[1px] bg-[black]'></div>
     <p className='py-[30px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elitbr
     . Distinctio debitis similique iste doloremque <br />et qui suscipit delectus ab necessitatibus deleniti.</p></div>
     </div>
     </div>


      <div className="programs py-[4px] bg-[white] grid place-items-center">
      <h1 className='text-center font-bold text-3xl py-[3%]'>OUR Plans</h1>
      <div className="programs md:grid  w-[90%] grid-cols-3 gap-[10px] my-[10px] flex flex-col ">
      <div className="p1 md:col-span-1 border border-black text-center  text-2xl h-[350px] flex flex-col justify-center items-center gap-[20px] mx-[20px] hover:scale-[1.06] duration-[500ms] "><h1 className='font-bold '>FOR 1 MONTH <br /> <span>600 RS</span></h1>
      <div className='w-[80%] h-[1px] bg-[black]'></div>
      <div className='w-[70%]  '><p>
      Yoga Meditation <br />
      <span className='line-through'>Unlimited Equipments</span> <br />
      <span className='line-through'>Personal Training</span>
      </p>
      <button className='p-[5px] border border-solid rounded bg-[white] hover:bg-[black] hover:text-[white] duration-[300ms] font-bold my-[20px]'>Join now</button>
      </div>
      </div>


      <div className="p1 md:col-span-1 border border-black text-center  text-2xl h-[350px] flex flex-col justify-center items-center gap-[20px] mx-[20px] hover:scale-[1.06] duration-[500ms]"><h1 className='font-bold'>FOR 3 MONTH <br /> <span>1600 RS</span></h1>
      <div className='w-[80%] h-[1px] bg-[black]'></div>
      <div className='w-[70%]  '><p>
      Yoga Meditation <br />
      <span className=''>Unlimited Equipments</span> <br />
      <span className='line-through'>Personal Training</span>
      </p>
      <button className='p-[5px] border border-solid rounded bg-[white] hover:bg-black hover:text-[white] duration-[300ms] font-bold my-[20px]'>Join now</button>
      </div>
      </div>


      <div className="p1 md:col-span-1 border border-black text-center  text-2xl h-[350px] flex flex-col justify-center items-center gap-[20px] mx-[20px] hover:scale-[1.06] duration-[500ms]"><h1 className='font-bold'>FOR 1 year <br /> <span>4000 RS</span></h1>
      <div className='w-[80%] h-[1px] bg-[black]'></div>
      <div className='w-[70%]  '><p>
      Yoga Meditation <br />
      <span>Unlimited Equipments</span> <br />
      <span className=''>Personal Training</span>
      </p>
      <button className='p-[5px] border border-solid rounded bg-[white] hover:bg-black hover:text-[white] duration-[300ms] font-bold my-[20px]'>Join now</button>
      </div>
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Home
