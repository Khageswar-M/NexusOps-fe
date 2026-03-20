import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/TitleContext';

const UserList = () => {

  const {setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle("User List");
  }, []);

  const boxes = Array.from({ length: 3 });

  return (
    <div className='grid grid-rows-[10%_77%_10%] gap-2 h-full p-2'>

      {/* Search activities */}
      <div
        className='grid grid-cols-7 gap-2'
      >
        <div className='col-span-2 bg-[hsl(0,0%,40%)] rounded-md'>Filter by name</div>
        <div className='col-span-2 bg-[hsl(0,0%,40%)] rounded-md'>Filter by role</div>
        <div className='col-span-2 bg-[hsl(0,0%,40%)] rounded-md'>Filter & Status</div>
        <div className='col-span-1 bg-[hsl(0,0%,40%)] rounded-md'>Search</div>
      </div>

      {/* Table header */}
      <div
        className='rounded-md grid grid-rows-15 overflow-y-auto '
      >
        <div
          className='row-span-1 bg-[hsl(0,0%,20%)] grid items-center grid-rows-1 grid-cols-7 gap-x-2'
        >
          <h3 className='col-span-2 text-white font-semibold text-[13px] px-8'>Name</h3>
          <h3 className='col-span-2 text-white font-semibold text-[13px]'>Email</h3>
          <h3 className='col-span-1 text-white font-semibold text-[13px]'>Role</h3>
          <h3 className='col-span-1 text-white font-semibold text-[13px] text-center'>Status</h3>
          <h3 className='col-span-1 text-white font-semibold text-[13px]'>Actions</h3>
        </div>


        {Array.from({ length: 7 }).map((_, index) => {
          return (
            // {/* Table Row 1 */}
            <div
              key={index}
              className='row-span-2  grid items-center grid-rows-1 grid-cols-7 gap-x-2'
            >
              {/* R-1 Name */}
              <div
                className='col-span-2 grid grid-rows-1 grid-cols-10 gap-x-2'
              >
                {/* R-1 Name box */}
                <div className='bg-[hsl(0,0%,50%)] col-span-1 flex items-center justify-center'>1</div>
                {/* R-1 Name DP */}
                <div className='bg-[hsl(0,0%,50%)] col-span-2 flex  items-center justify-center'>1</div>
                {/* R-1 Name Name */}
                <div className='bg-[hsl(0,0%,50%)] col-span-7 grid grid-rows-2'>
                  <div className='row-span-1 text-[15px]'>Name</div>
                  <div className='row-span-1 text-[12px]'>id</div>
                </div>
              </div>

              <div className='col-span-2 bg-[hsl(0,0%,50%)]'>Email</div>
              <div className='col-span-1 bg-[hsl(0,0%,50%)]'>Role</div>
              <div className='col-span-1 bg-[hsl(0,0%,50%)] text-center'>Status</div>
              <div className='col-span-1  grid grid-cols-5 grid-rows-1 gap-x-2'>
                <div className='col-span-2 bg-[hsl(0,0%,50%)]'>Edit</div>
                <div className='col-span-3 bg-[hsl(0,0%,50%)]'>Delete</div>
              </div>
            </div >
          )
        })}
      </div >

      <div
        className=' rounded-md flex items-center justify-between px-5'
      >
        <div className='bg-[hsl(0,0%,40%)] rounded-md px-2'>
          <h3>Showing 1 to 7 of 7 users</h3>
        </div>
        <div className='flex flex-row gap-2 [&>div]:rounded-md'>
          <div className='px-2 bg-[hsl(0,0%,40%)]'>Previous</div>
          <div className='px-2 bg-[hsl(0,0%,40%)]'>1</div>
          <div className='px-2 bg-[hsl(0,0%,40%)]'>2</div>
          <div className='px-2 bg-[hsl(0,0%,40%)]'>Next</div>
        </div>
      </div>

    </div >
  )
}

export default UserList; 