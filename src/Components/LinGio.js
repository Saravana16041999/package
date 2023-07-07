import React from 'react'
import LineChart from './LineChart'
import { AiOutlineDown, } from "react-icons/ai";
import { BsThreeDotsVertical, } from "react-icons/bs";
import Geo from './Geo';


const LinGio = () => {
  return (
    <div className='md:h-72   m-2 flex justify-between md:justify-start md:ml-32 md:flex-row flex-col  md:mr-28'>
    <div className=' bg-blue-200 h-72 md:w-1/2 ml-3 md:mr-8 mb-4'>
       <div className='m-2 flex text-sm justify-between border-b-2 border-inherit'>
       <div className='flex items-center '>
       <p>Total Sales</p>
       <h1 className='m-2 text-lg'>123,112</h1>
       </div>
        <div className='flex items-center w-24 justify-between'>
        <span className='mr-2'>Year</span>
        <button><AiOutlineDown/></button>
        <button><BsThreeDotsVertical/></button>
        </div>
       </div>
       <div className='h-80 w-full mr-4'>
        <LineChart/>
       </div>  
    </div>
    <div className=' h-72 md:w-1/2 bg-blue-200 md:ml-4 mb-9'>
    <div className='m-1 flex items-center h-11 text-sm justify-between border-b-2 border-inherit'>
       <div className='flex items-center mb-2'>
       <p>Visitors by country</p>
       </div>
        <div className='flex items-center overflow-hidden w-4 mb-1 justify-between'>
        <button><BsThreeDotsVertical/></button>
        </div>
       </div>
       <div className='h-56  ml-10'>
        <Geo />
       </div>
    </div>
    </div>
  )
}

export default LinGio