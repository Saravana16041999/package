import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import BarChart from './BarChart';
import PieChart from './PieChart';
import Swamp from './SwampChart';

const PieBar = () => {
  return (
    <div className='m-4 md:ml-28 flex  md:flex-row  flex-col'>
        <div className='  bg-blue-200 w-80 m-8 md:w-96 md:mr-5 md:ml-9 text-sm'>
        <div className=' ml-2 mr-2 mt-2 flex h-12  items-center justify-between border-b-2 border-inherit'>
       <div className='flex items-center mb-2'>
       <p>Visitor traffic</p>
       </div>
        <div className='flex items-center w-4 mb-1 justify-between'>
        <button><BsThreeDotsVertical/></button>
        </div>
       </div>
       <div className='h-56   relative'>
        <PieChart/>
        <div className='w-20 text-center absolute top-20 left-28'>
        <h1>52,142</h1>
        <small className=''>Total website Visitors</small>
        </div>
       </div>
       <div  className='text-xs  flex  h-9 items-center  border-t-2 border-inherit justify-evenly'>
        <span >75% Referal</span>
        <span>11% Email</span>
        <span>6% Direct</span>
        <span>6% Social</span>
       </div>
        </div>
        <div className=' bg-blue-200 w-80 md:w-96 m-8 md:mr-5'>
        <div className=' m-2 text-sm'>
        <div className='  mr-2 mt-2 flex h-12  items-center justify-between border-b-2 border-inherit'>
       <div className='flex items-center mb-2'>
       <p>Avg session duration and bounce rate</p>
       </div>
        <div className='flex items-center w-4 mb-1  justify-between'>
        <button><BsThreeDotsVertical/></button>
        </div>
       </div>
       <div className='h-56 ' >
        <Swamp/>
        <div  className='text-xs  flex  h-9 items-center  justify-center'>
        <span >Bounce rate</span>
       </div>
       </div>
        </div>
        </div>
        <div className=' bg-blue-200 w-80 md:w-96 md:mr-16 m-8 '>
        <div className='   text-sm'>
        <div className=' ml-2 mr-2 mt-2 flex h-12  items-center justify-between border-b-2 border-inherit'>
       <div className='flex items-center mb-2'>
       <p>Product usage by device type</p>
       </div>
        <div className='flex items-center w-4 mb-1 justify-between'>
        <button><BsThreeDotsVertical/></button>
        </div>
       </div>
        </div>
        <div className='m-4'>
          <h1>52,142</h1>
          <small>Total Users</small>
        </div>
        <div className='h-24 mt-4 '>
         <BarChart/>
        </div>
        <div className='flex justify-evenly mt-5 '>
          <div>
            <small className='mb-2'>Mobile</small>
            <div className='text-xs mt-2 flex justify-between'><small>42.102</small><small>67%</small></div>
            <div className='w-20 h-2 bg-blue-100 rounded'></div>
          </div>
          <div>
            <small>Desktop</small>
            <div className='text-xs mt-2 flex justify-between'><small>8.024</small><small>25%</small></div>
            <div className='w-20 h-2 bg-blue-500 rounded'></div>
          </div>
          <div>
            <small>Tablet</small>
            <div className='text-xs mt-2 flex justify-between'><small>2.016</small><small>8%</small></div>
            <div className='w-20 h-2 bg-green-200 rounded'></div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default PieBar