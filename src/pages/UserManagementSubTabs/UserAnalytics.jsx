import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/TitleContext';
import OnlineTag from '../../components/OnlineTag.jsx';
import UserLoginTrendsChart  from  '../../components/UserAnalytics/UserLoginTrendsChart.jsx'
import CustomPieChart from '../../components/UserAnalytics/CustomPiChart.jsx';
import { roleDistribution } from '../../config/RawData.js';

const UserAnalytics = () => {
  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["User Management", "User Analytics"]);
  }, []);

  const HeadBar = ({ title, color }) => {
    return (
      <div>
        <div className='flex flex-row items-center gap-2'>
          <OnlineTag diameter={8} bgColor={color} />
          <div>{title}</div>
        </div>
      </div>
    )
  }

  return (
    <div className='grid grid-rows-[1fr_1fr_1fr] gap-2 h-full overflow-hidden text-white'>

      {/* ROW 1 */}
      <div className='bg-surface rounded-md grid grid-rows-[1fr_5fr] '>
        <div className='flex flex-row items-center justify-between border-b border-border px-2'>
          <HeadBar title={"User Login Trends"} color={"blue"}/>

          <div className='flex flex-row items-center gap-2 text-xs'>
            {
              ["7 days", "30 days", "6 Month", "1 Year"].map((days) => {
                return(
                  <button 
                    key={days}
                    className='border border-border p-0.5 px-2 rounded-md bg-surface-3 cursor-pointer active:bg-surface-2 focus:border-cyan-400'
                  >
                    {days}
                  </button>
                )
              })
            }
          </div>
        </div>
        <div className='p-2 relative '>
          <div className='absolute flex flex-row items-center gap-2 text-[10px] text-text-muted top-0'>
              {
                [
                  {
                    title: "Total Logins",
                    col: "bg-blue-500"
                  }, 
                  {
                    title: "Unique Users",
                    col: "bg-cyan-500"
                  }, 
                  {
                    title: "New Users",
                    col: "bg-orange-500"
                  }, 
                  {
                    title: "Returning",
                    col: "bg-purple-500"
                  }, 
                ].map((item) => {
                  return(
                    <div className='flex flex-row items-center gap-1'>
                      <div className={`${item.col} px-1 py-0.5 rounded-full`}/>
                      <div>{item.title}</div>
                    </div>
                  )
                })
              }
          </div>
          <div className='w-full h-full absolute -translate-x-5'>
            <UserLoginTrendsChart/>
          </div>
          
        </div>
      </div>

      {/* ROW 2 */}
      <div className='grid grid-cols-[1fr_1fr_1fr] gap-2 [&>div]:rounded-md [&>div]:bg-surface'>
        
        {/* Role Distribution */}
        <div className='grid grid-rows-[1fr_5fr]'>
          <div className='px-2 border-b border-border flex items-center'>
            <HeadBar color={"purple"} title={"Role Distribution"}/>
          </div>
          <div className='grid grid-cols-[1fr_1fr] gap-1'>
            <div className=''>
              <CustomPieChart data={roleDistribution}/>
            </div>
            <div className=''>2</div>
          </div>
        </div>

        {/* Account Status */}
        <div className='grid grid-rows-[1fr_5fr]'>
          <div className='px-2 border-b border-border flex items-center'>
            <HeadBar color={"cyan"} title={"Account Status"}/>
          </div>
          <div>2</div>
        </div>

        {/* Login Platforms */}
        <div className='grid grid-rows-[1fr_5fr]'>
          <div className='px-2 border-b border-border flex items-center'>
            <HeadBar color={"green"} title={"Login Platforms"}/>
          </div>
          <div>2</div>
        </div>
      </div>

      {/* ROW 3 */}
      <div className='grid grid-cols-[1fr_1fr_1fr] gap-2 [&>div]:rounded-md [&>div]:bg-surface'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

export default UserAnalytics;