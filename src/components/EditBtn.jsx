import React from 'react'
import Edit from '../assets/Edit.svg?react'

const EditBtn = () => {
  return (
    <div className='flex flex-row items-center gap-1 text-gray-500 border border-gray-500 bg-gray-500/10 px-1 rounded-md'>
        <Edit className="h-5 w-5"/>
        <div className='text-sm'>Edit</div>
    </div>
  )
}

export default EditBtn