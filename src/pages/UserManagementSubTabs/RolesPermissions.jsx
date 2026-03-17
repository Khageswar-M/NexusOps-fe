import React, { useContext, useEffect } from 'react'
import { titleIs } from '../../context/TitleContext';

const RolesPermissions = () => {

  const { setTitle } = useContext(titleIs);
    useEffect(() => {
      setTitle("Roles & Permissions");
    }, []);

  const data = [
    { id: 1, role: "Admin", description: "Full System Access", users: 3, createdDate: "2022-09-23" },
    { id: 2, role: "Manager", description: "Manage Operations", users: 6, createdDate: "2022-09-23" },
    { id: 3, role: "Operator", description: "Limited System Control", users: 3, createdDate: "2022-09-23" },
  ];

  const permissions = [
    { id: 1, title: "Dashboard" },
    { id: 2, title: "User Management" },
    { id: 3, title: "Data Analytics" },
    { id: 4, title: "Task Automation" },
    { id: 5, title: "System Settings" },
  ]

  return (
    <div className='grid grid-rows-[1fr_3fr_4fr_2fr] h-full gap-2 p-2'>
      {/* Row 1 */}
      <div className=' grid grid-cols-[7fr_5fr] gap-50'>
        {/* Row 1 Col 1*/}
        <div className='bg-[hsl(0,0%,40%)]'></div>

        {/* Row 1 Col 2*/}
        <div className='grid grid-cols-[6fr_5fr] gap-1'>
          {/* Row 1 Col 2 => col 1*/}
          <div className='bg-[hsl(0,0%,40%)]'></div>

          {/* Row 1 Col 2 => col 2*/}
          <div className='bg-[hsl(0,0%,40%)]'></div>
        </div>
      </div>

      {/* Row 2 Table*/}
      <div className='grid grid-rows-[1fr_2fr_2fr_2fr_1fr] gap-0.5'>

        {/* Table Head */}
        <div className='grid grid-cols-[2fr_3fr_1fr_2fr_2.5fr] gap-0.5 [&>div]:bg-[hsl(0,0%,40%)] [&>div]:grid'>
          <div className='px-3'>Role</div>
          <div className='px-3'>Description</div>
          <div className='text-center'>Users</div>
          <div className='text-center'>Created Date</div>
          <div className='px-3'>Actions</div>
        </div>

        {/* Table row 1 */}
        {data.map((d, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-[2fr_3fr_1fr_2fr_2.5fr] gap-0.5 [&>div]:items-center [&>div]:grid'>
              {/* Role */}
              <div className='grid grid-cols-[2fr_4fr] gap-0.5'>
                <div className='bg-[hsl(0,0%,40%)] text-center'>dp</div>
                <div className='bg-[hsl(0,0%,40%)] px-3'>{d.role}</div>
              </div>

              {/* Description */}
              <div className='bg-[hsl(0,0%,40%)] px-3'>{d.description}</div>

              {/* Users */}
              <div className='bg-[hsl(0,0%,40%)] text-center'>{d.users}</div>

              {/* Created Date */}
              <div className='bg-[hsl(0,0%,40%)] text-center'>{d.createdDate}</div>

              {/* Actions */}
              <div className='grid grid-cols-[1fr_1fr] gap-0.5 [&>div]:text-center'>
                <div className='bg-[hsl(0,0%,40%)]'>Edit</div>
                <div className='bg-[hsl(0,0%,40%)]'>Delete</div>
              </div>
            </div>
          )
        })}
        {/* Table footer */}
        <div className='flex items-center justify-end'>
          <div className=' w-[25%] grid grid-cols-[2fr_1fr_2fr] gap-1 [&>div]:text-center'>
            <div className='bg-[hsl(0,0%,40%)]'>Previous</div>
            <div className='bg-[hsl(0,0%,40%)]'>2</div>
            <div className='bg-[hsl(0,0%,40%)]'>Next</div>
          </div>
        </div>
      </div>

      {/* Row 3 Table*/}
      <div className='grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-0.5'>

        {/* Table Header */}
        <div className='grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-0.5 [&>div:not(:first-child)]:text-center'>
          <div className='bg-[hsl(0,0%,40%)] px-3'>Permission Matrix</div>
          <div className='bg-[hsl(0,0%,40%)]'>Admin</div>
          <div className='bg-[hsl(0,0%,40%)]'>Manager</div>
          <div className='bg-[hsl(0,0%,40%)]'>Operator</div>
          <div className='bg-[hsl(0,0%,40%)]'></div>
        </div>

        {/* Table Body */}
        {permissions.map((permission, index) => {
          return (
         <div key={permission.id} className='grid grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-0.5 [&>div:not(:first-child)]:text-center'>
              <div className='bg-[hsl(0,0%,40%)] px-3'>{permission.title}</div>
              <div className='bg-[hsl(0,0%,40%)]'>y/n</div>
              <div className='bg-[hsl(0,0%,40%)]'>y/n</div>
              <div className='bg-[hsl(0,0%,40%)]'>y/n</div>
              <div className='flex items-center justify-center'>
                  <div className=' w-[70%] grid grid-cols-[6fr_4fr] gap-1'>
                    <div className='bg-[hsl(0,0%,40%)]'>1</div>
                    <div className='bg-[hsl(0,0%,40%)]'>2</div>
                  </div>
              </div>
            </div>
          )
        })}

        <div className='w-full flex items-center justify-end'>
          <div className='bg-[hsl(0,0%,40%)] w-[20%] text-center'>
            Save Permissions
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className=' grid grid-rows-[1fr_1fr_1fr] gap-1'>
        <div className='bg-[hsl(0,0%,40%)] px-3'>Role Assignment</div>
        <div className=' grid grid-cols-[5fr_4fr] gap-1'>
          <div className=' grid grid-cols-[1fr_5fr] gap-1'>
            <div className='bg-[hsl(0,0%,40%)] text-center'>User:</div>
            <div className='bg-[hsl(0,0%,40%)]'>2</div>
          </div>
          <div className=' grid grid-cols-[1fr_5fr] gap-1'>
            <div className='bg-[hsl(0,0%,40%)] text-center'>Role:</div>
            <div className='bg-[hsl(0,0%,40%)]'>2</div>
          </div>
        </div>
        <div className='w-full flex items-center justify-end'>
          <div className='bg-[hsl(0,0%,40%)] w-[20%] text-center'>Assign Role</div>
        </div>
      </div>
    </div>
  )
}

export default RolesPermissions;