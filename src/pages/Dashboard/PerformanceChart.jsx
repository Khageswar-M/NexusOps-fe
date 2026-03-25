
import AreaChartComponent from '../../components/AreaChartComponent';

const PerformanceChart = () => {

  const recentUsages = [
    {
      title: "CPU Usage",
      value: 90
    },
    {
      title: "Memory",
      value: 72
    },
    {
      title: "Dish I/O",
      value: 45
    },
    {
      title: "Network",
      value: 38
    },
    {
      title: "Storage",
      value: 61
    }
  ]
  const colorMap = {
    green: "text-green-400",
    purple: "text-purple-400",
    orange: "text-orange-400",
    red: "text-red-400"
  }

  return (
    <div className='rounded-md overflow-hidden  grid grid-cols-[1.5fr_1fr_1fr] gap-2 [&>div]:rounded-md [&>div]:border [&>div]:border-border'>
      <div className='bg-surface-2'>1</div>
      <div className='bg-surface-2 grid grid-rows-[1fr_5fr]'>
        <div className='px-5 text-text-muted text-[15px] font-bold border-b border-b-border flex items-center'>
          Recent Usages
        </div>
        <div className='grid grid-rows-[1fr_1fr_1fr_1fr_1fr]'>
          {recentUsages.map((usage, index) => {
            return (
              <div
                key={index}
                className=''
              >
                <div className='flex flex-row items-center justify-between px-5 pb-1'>
                  <div className='text-white/50 text-[12px]'>{usage.title}</div>
                  <div className={`text-[12px] font-extrabold 
                    ${usage.value >= 90 ?
                      colorMap["red"] :
                      usage.value >= 70 ?
                        colorMap["orange"] :
                        usage.value >= 40 ?
                          colorMap["purple"] :
                          colorMap["green"]
                    }
                    `}>{`${usage.value}%`}</div>
                </div>
                <div className='h-1.5 px-5'>
                  <div className='w-full h-full bg-white/10 rounded-full overflow-hidden'>

                    <div
                      className={`
                        h-full
                        bg-linear-to-r
                        ${usage.value >= 90
                          ? "from-green-400 via-blue-400 to-red-500"
                          : usage.value >= 70
                            ? "from-green-400 via-blue-400 to-orange-500"
                            : usage.value >= 40
                              ? "from-green-400 via-blue-400 to-purple-500"
                              : "from-green-400 to-blue-400"
                        }
                          transition-all duration-500`}
                      style={{ width: `${usage.value}%` }}
                    />

                  </div>
                </div>
              </div>
            )
          })}
          {/* <div className='border-t border-border px-5 grid grid-rows-[1fr_1fr] gap-0'>
             <div className='text-[10px] text-text-muted font-bold'>Traffic source</div>
             <div></div>
          </div> */}
        </div>
      </div>
      <div className='bg-surface-2'>3</div>

    </div>
  )
}

export default PerformanceChart;