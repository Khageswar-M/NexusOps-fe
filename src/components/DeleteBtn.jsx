import React from 'react'
import Trash from '../assets/TrashBin.svg?react'

const DeleteBtn = () => {
  return (
    <div className='text-red-500 p-1 w-fit rounded-md border border-red-500 bg-red-500/10'>
        <Trash className="w-4 h-4"/>
    </div>
  )
}

export default DeleteBtn