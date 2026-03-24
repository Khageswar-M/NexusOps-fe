import { useContext, useEffect } from "react";
import { AppContext } from "../../context/TitleContext";

const AddUser = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "Add User"]);
  }, []);

  return (
    <div className='grid grid-rows-[5fr_1.5fr_3fr_1fr] h-full rounded-md p-2 gap-1 bg-[hsl(0,0%,20%)]'>

      <div className='grid grid-rows-[2fr_1fr_1fr_1fr_1fr] gap-1'>
        <div className='grid grid-cols-[1fr_9fr] w-full grid-rows-2 gap-1'>

          <div className='row-span-2 bg-[hsl(0,0%,40%)]'>1</div>
          <div className='grid grid-rows-[1fr_1fr] row-span-2 gap-1'>
            <div className='bg-[hsl(0,0%,40%)]'>1</div>

            <div className=' grid grid-cols-[1fr_1fr] gap-1'>
              <div className='bg-[hsl(0,0%,40%)]'>1</div>
              <div className='bg-[hsl(0,0%,40%)]'>2</div>
            </div>
          </div>
        </div>

        <div className=' grid grid-cols-[1fr_3fr] gap-1'>
          <div className='bg-[hsl(0,0%,40%)]'>1</div>
          <div className='bg-[hsl(0,0%,40%)]'>2</div>
        </div>

        <div className=' grid grid-cols-[1fr_3fr] gap-1'>
          <div className='bg-[hsl(0,0%,40%)]'>1</div>
          <div className='bg-[hsl(0,0%,40%)]'>2</div>
        </div>

        <div className=' grid grid-cols-[1fr_3fr] gap-1'>
          <div className='bg-[hsl(0,0%,40%)]'>1</div>
          <div className='bg-[hsl(0,0%,40%)]'>2</div>
        </div>

        <div className=' grid grid-cols-[1fr_3fr] gap-1'>
          <div className='bg-[hsl(0,0%,40%)]'>1</div>
          <div className=' grid grid-cols-[1fr_1fr] gap-1'>
            <div className='bg-[hsl(0,0%,40%)]'>1</div>
          </div>
        </div>
      </div>

      <div className=' grid grid-rows-[1fr_2fr] gap-1'>
        <div className='bg-[hsl(0,0%,40%)]'>1</div>

        <div className='grid grid-cols-[1fr_3fr] gap-1'>
          <div className=' grid grid-rows-[1fr_10px] gap-1'>
            <div className='bg-[hsl(0,0%,40%)]'>1</div>
          </div>

          <div className=' grid grid-cols-[1fr_1fr] gap-1'>
            <div className=' grid grid-rows-[1fr_10px] gap-1'>
              <div className='bg-[hsl(0,0%,40%)]'>.</div>
              <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-1'>
                <div className='bg-[hsl(0,0%,40%)]'></div>
                <div className='bg-[hsl(0,0%,40%)]'></div>
                <div className='bg-[hsl(0,0%,40%)]'></div>
                <div className='bg-[hsl(0,0%,40%)]'></div>
              </div>
            </div>
            <div className=' grid grid-rows-[1fr_10px] gap-1'>
              <div className='bg-[hsl(0,0%,40%)]'>.</div>
            </div>
          </div>
        </div>
      </div>

      <div className=' grid grid-rows-[1fr_1fr] gap-1'>
        <dir className=' grid grid-cols-[2fr_1.19fr] gap-1'>
          <div className=' grid grid-rows-[1fr_1fr] gap-1'>
            <div className='bg-[hsl(0,0%,40%)]'>1</div>

            <div className=' grid grid-cols-[1fr_1.5fr] gap-1'>
              <div className='bg-[hsl(0,0%,40%)]'>1</div>

              <div className='grid grid-cols-[1fr_1fr] gap-1'>
                <div className='bg-[hsl(0,0%,40%)]'>Active</div>
                <div className='bg-[hsl(0,0%,40%)]'>Inactive</div>
              </div>

            </div>
          </div>
          <div className='grid grid-rows-[1fr_1fr] gap-1'>
            <div className='bg-[hsl(0,0%,40%)]'>1</div>
            <div className='bg-[hsl(0,0%,40%)]'>2</div>
          </div>

        </dir>
        <dir className='grid grid-cols-[1fr_3fr] gap-1'>
          <div className='bg-[hsl(0,0%,40%)]'>1</div>
          <div className='bg-[hsl(0,0%,40%)]'>2</div>
        </dir>

      </div>
      <div className='grid grid-cols-[1fr_2fr] gap-1'>
        <div className='grid grid-cols-[4fr_3fr] gap-1'>
          <div className='bg-[hsl(0,0%,40%)]'>Add user</div>
          <div className='bg-[hsl(0,0%,40%)]'>Cancel</div>
        </div>
      </div>

    </div>
  )
}

export default AddUser;