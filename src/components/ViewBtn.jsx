import React from 'react';
import Eye from '../assets/Eye.svg?react'

const ViewBtn = () => {
  return (
    <div className='flex flex-row items-center gap-1 px-1 rounded-md border border-gray-500 text-gray-500 bg-gray-500/10 w-fit'>
        <Eye className="w-4 h-4"/>
        <div className='text-sm'>View</div>
    </div>
  )
}

export default ViewBtn