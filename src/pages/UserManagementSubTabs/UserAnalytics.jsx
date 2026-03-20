import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/TitleContext';

const UserAnalytics = () => {
  const {setTitle } = useContext(AppContext);
    useEffect(() => {
      setTitle("User Analytics");
    }, []);

  return (
    <div className='grid grid-rows-[2fr_3fr_5fr] gap-2 p-2 h-full'>
      
      <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-2'>
        <div className='bg-[hsl(0,0%,40%)]'>1</div>
        <div className='bg-[hsl(0,0%,40%)]'>2</div>
        <div className='bg-[hsl(0,0%,40%)]'>3</div>
        <div className='bg-[hsl(0,0%,40%)]'>4</div>
      </div>

      <div className=' grid grid-rows-[1fr_5fr_1fr] gap-1'>
        <div className='bg-[hsl(0,0%,40%)]'>1</div>
        <div className='bg-[hsl(0,0%,40%)]'>2</div>
        <div className='bg-[hsl(0,0%,40%)]'>3</div>
      </div>

      <div className='grid grid-cols-[1fr_1fr_1fr] gap-2'>
        <div className='bg-[hsl(0,0%,40%)]'>1</div>
        <div className='bg-[hsl(0,0%,40%)]'>2</div>
        <div className='bg-[hsl(0,0%,40%)]'>3</div>
      </div>
    </div>
  )
}

export default UserAnalytics;