import Loading from "./Loading"

const ApplicationLoader = () => {
    return (
      <div className='grid grid-cols-[1fr_4fr] gap-2 h-full w-full p-2'>
          {/* Sidebar skeleton */}
          <div className='h-full rounded-md animate-blink-gray'/>

          {/* Content area */}
          <div className='grid grid-rows-[1fr_8fr] gap-2'>
              {/* Header skeleton */}
              <div className='h-full rounded-md animate-blink-gray'/>

              <div className="grid grid-rows-[1fr_2fr_2fr] gap-2">
                {/* KPI Row */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-full w-full rounded-md animate-blink-gray" />
                  <div className="h-full w-full rounded-md animate-blink-gray" />
                  <div className="h-full w-full rounded-md animate-blink-gray" />
                  <div className="h-full w-full rounded-md animate-blink-gray" />
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-full w-full rounded-md animate-blink-gray"/>
                  <div className="h-full w-full rounded-md animate-blink-gray"/>
                  <div className="h-full w-full rounded-md animate-blink-gray"/>
                </div>

                {/* Tables Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-full w-full rounded-md animate-blink-gray"/>
                  <div className="h-full w-full rounded-md animate-blink-gray"/>
                </div>
              </div>
          </div>
      </div>
    )
  }

  export default ApplicationLoader;