import React from 'react'
import Rotate from '../assets/Rotate.svg?react'

const RetryBtn = () => {
  return (
    <div className='flex items-center gap-1 border border-orange-500 bg-orange-500/10 rounded-md px-1 text-orange-500 w-fit'>
        <Rotate className="w-5 h-5"/>
        <div className='text-[0.8rem] font-bold '>Retry</div>
    </div>
  )
}

export default RetryBtn