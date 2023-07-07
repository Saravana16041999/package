import React from 'react'

const SingleData = () => {
  return (
    <div className='flex   flex-col md:flex-row md:ml-32 items-center  w-96 md:w-auto  ml-3 mt-6'>
        <div className='w-60 md:w-96 h-36 bg-blue-200 m-8 md:m-4'>
        <p className='mt-8 ml-8 mb-5 text-sm'>Session</p>
       <div className='ml-8 flex'> <h1 className='text-xl mr-3'>1,127,450</h1> <small className='mt-2 bg-green-200 text-center text-green-500 w-8 h-3 text-xs flex items-center justify-center'>23%</small></div>
        <small className='ml-8'>Current vs previous month</small>
        </div>
        <div className='w-60 h-36 md:w-96 bg-blue-200 m-8 md:m-4'>
        <p className='mt-8 ml-8 mb-5 text-sm'>Page views</p>
       <div className='ml-8 flex'> <h1 className='text-xl mr-3'>117,450</h1> <small className='mt-2 bg-red-200 text-center text-red-500 w-8 h-3 flex items-center justify-center'>12%</small></div>
        <small className='ml-8'>Current vs previous month</small>
        </div>
        <div className='w-60 h-36 md:w-96 bg-blue-200 m-8  md:m-4'>
        <p className='mt-8 ml-8 mb-5 text-sm'>Users</p>
       <div className='ml-8 flex'> <h1 className='text-xl mr-3'>4,117,450</h1> <small className='mt-2 bg-green-200 text-center text-green-500 w-8 h-3 flex items-center justify-center'>23%</small></div>
        <small className='ml-8'>Current vs previous month</small>
        </div>
        <div className='w-60 h-36 md:w-96 bg-blue-200 m-8 md:m-4'>
        <p className='mt-8 ml-8 mb-5 text-sm'>Website bouncing (Avg)</p>
       <div className='ml-8 flex'> <h1 className='text-xl mr-3'>39.21</h1> <small className='mt-2 bg-red-200 text-center text-red-500 w-8 h-3 flex items-center justify-center'>12%</small></div>
        <small className='ml-8'>Current vs previous month</small>
        </div>
    </div>
  )
}

export default SingleData