import React from 'react'
import ArrowDown from '../assets/DownArrow.svg?react'

const DLBtn = () => {
  return (
    <div className='flex flex-row items-center gap-1 px-1 text-green-500 bg-green-500/10 border border-green-500 w-fit rounded-md'>
        <ArrowDown className="w-5 h-5"/>
        <div className='text-sm font-bold'>DL</div>
    </div>
  )
}

export default DLBtn