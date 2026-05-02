import React, { useEffect } from 'react'
import OnlineTag from '../../components/OnlineTag.jsx';
import UserLoginTrendsChart from '../../components/UserAnalytics/UserLoginTrendsChart.jsx'
import CustomPieChart from '../../components/UserAnalytics/CustomPiChart.jsx';
import { roleDistribution, accountStatus, loginPlatforms, topModulesUser, topCountries } from '../../config/RawData.js';

// redux
import { useDispatch } from 'react-redux';
import { setTitle } from '../../redux/appSlice.js';


const UserAnalytics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["User Management", "User Analytics"]));
  }, [dispatch]);

  const totalRoles = roleDistribution.reduce((acc, curr) => acc + curr.value, 0);
  const totalAcc = accountStatus.reduce((acc, curr) => acc + curr.value, 0);
  const totalPlatforms = loginPlatforms.reduce((acc, curr) => acc + curr.value, 0);
  const totalModule = topModulesUser.reduce((acc, curr) => acc + curr.value, 0);
  const totalCountries = topCountries.reduce((acc, curr) => acc + curr.value, 0);

  const HeadBar = ({ title, color }) => {
    return (
      <div>
        <div className='flex flex-row items-center gap-2'>
          <OnlineTag diameter={8} bgColor={color} />
          <div className='text-[1rem] text-text-muted font-bold'>{title}</div>
        </div>
      </div>
    )
  }

  const ChartContent = ({ roles, totalCount }) => {
    return (
      <div>
        {
          roles.map((role, i) => {
            return (
              <div
                key={i}
                className='grid grid-cols-[2fr_1fr] items-center '
              >
                <div className='flex flex-row items-center gap-2'>
                  <div>
                    <OnlineTag diameter={7} bgColor={role.col} />
                  </div>
                  <div className='text-text-muted'>
                    <div className='text-[1rem]'>{role.name}</div>
                    <div className='text-[0.7rem]'>{role.value} users</div>
                  </div>
                </div>
                <div className={`${role.text} text-[1rem] font-bold`}>
                  {((role.value / totalCount) * 100).toFixed(2)}%
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

 const RowTwoContent = ({
    barTitle,
    barTagCol,
    chartData,
    totalCount
  }) => {
    return (
      <div className='grid grid-rows-[1fr_5fr] grid-cols-1'>
        {/* Header */}
        <div className='border-b border-border flex items-center px-2'>
          <HeadBar title={barTitle} color={barTagCol} />
        </div>

        {/* Content */}
        <div className='grid grid-cols-2 grid-rows-1 overflow-hidden'>
          {/* PI Chart */}
          <div className=''>
            <CustomPieChart data={chartData} />
          </div>

          {/* Chart Content */}
          <div className='grid p-1 grid-cols-1 grid-rows-1 overflow-y-auto custom-scrollbar'>
            <div className='flex flex-col gap-2'>
              <ChartContent roles={chartData} totalCount={totalCount} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const RowThreeContent = ({
    barTitle,
    barTagCol,
    data
  }) => {
    return (
      <div className='grid grid-rows-[1fr_5fr]'>
        <div className='border-b border-border flex items-center px-2'>
          <HeadBar color={barTagCol} title={barTitle} />
        </div>
        <div className='flex flex-col gap-2 overflow-y-auto custom-scrollbar'>
          {
            data.map((module) => {
              return (
                <div className='grid grid-rows-1 grid-cols-2 p-2'>
                  <div className='flex flex-row items-center gap-2'>
                    <div className={` w-8 h-8 rounded-md ${module.Icon && 'bg-cyan-500/10'} text-cyan-500 flex items-center justify-center`}>
                      {module.Icon && <module.Icon size={20} />}
                      {module.src && (
                        <img src={module.src} alt="country" />
                      )}
                    </div>
                    <div className={`${module.col ? module.col : 'text-cyan-500'}`}>{module.title}</div>
                  </div>

                  <div className='grid grid-rows-1 grid-cols-[2fr_1fr] items-center gap-2'>
                    <div className="h-1 w-full bg-cyan-300/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${module.bgCol ? module.bgCol : "bg-cyan-400"}  transition-all duration-500`}
                        style={{ width: `${((module.value / totalModule) * 100).toFixed(2)}%` }}
                      />
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className={`${module.col ? module.col : 'text-cyan-500'} text-[1rem]`}>{module.value}</div>
                      <div className='text-text-muted text-[0.8rem]'>{((module.value / totalModule) * 100).toFixed(2)}%</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }



  return (
    <div className='grid grid-rows-3 grid-cols-1 gap-2 h-full [&>div]:rounded-md'>
      {/* ROW 1 */}
      <div className='grid grid-rows-[1fr_5fr] grid-cols-1 bg-surface'>
        {/* Header */}
        <div className='border-b border-border flex flex-row items-center px-2'>
          <HeadBar color={"blue"} title={"User Login Trends"} />
        </div>

        {/* Content */}
        <div className='grid grid-cols-1 grid-rows-1 overflow-hidden relative'>
          <div className='absolute flex flex-row items-center gap-2 text-[10px] text-text-muted top-0 left-1/2 -translate-x-1/2'>
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
                return (
                  <div className='flex flex-row items-center gap-1'>
                    <div className={`${item.col} px-1 py-0.5 rounded-full`} />
                    <div>{item.title}</div>
                  </div>
                )
              })
            }
          </div>
          {/* Chart Content */}
          <div className='grid grid-cols-1 grid-rows-1 '>
            <div className='-translate-x-5 translate-y-3'>
              <UserLoginTrendsChart />
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className='grid grid-cols-3 grid-rows-1 gap-2 [&>div]:rounded-md [&>div]:bg-surface'>

        {/* ROLE DISTRIBUTION */}
        <RowTwoContent
          barTitle={"Role Distribution"}
          barTagCol={"purple"}
          chartData={roleDistribution}
          totalCount={totalRoles}
        />

        {/* ACCOUNT STATUS */}
        <RowTwoContent
          barTitle={"Account Status"}
          barTagCol={"cyan"}
          chartData={accountStatus}
          totalCount={totalAcc}
        />

        {/* LOGIN PLATFORMS */}
        <RowTwoContent
          barTitle={"Login Platforms"}
          barTagCol={"blue"}
          chartData={loginPlatforms}
          totalCount={totalPlatforms}
        />

      </div>

      {/* ROW 3 */}
      <div className='grid grid-rows-1 grid-cols-2 gap-2 [&>div]:rounded-md [&>div]:bg-surface'>
        {/* TOP MODULES USED */}
        <RowThreeContent
          key={1}
          barTitle={"Top Modules Used"}
          barTagCol={"orange"}
          data={topModulesUser}
        />

        {/* TOP COUNTRIES */}
        <RowThreeContent
          key={2}
          barTitle={"Top Countries"}
          barTagCol={"green"}
          data={topCountries}
        />
      </div>
    </div>
  )
}

export default UserAnalytics;