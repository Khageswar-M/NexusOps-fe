import EmptyActivity from '../../assets/no_activity.png';
const PermissionsActivity = () => {
  return (
    <div className='h-full grid grid-rows-1'>
      <div className='h-full overflow-y-auto custom-scrollbar pb-10'>
        {
          1 > 0 ? (
            Array.from({ length: 5 }).map((_, idx) => {
              return (<div key={idx} className='grid grid-cols-[6fr_1fr] px-2 py-2 border-b border-border' >
                <div className='grid grid-cols-[1fr_5fr] items-center gap-2'>
                  <div className='bg-linear-to-br from-purple-400 to-red-400 w-10 h-10 flex items-center justify-center rounded-full font-bold text-white'>
                    AD
                  </div>

                  <div className='flex flex-col'>
                    <div className='text-white text-[13px]'>Admin assigned Manager role to John Doe.</div>
                    <div className='text-[11px] self-start text-orange-400 font-bold bg-orange-400/10 px-2 py-0.5 rounded-full'>Admin</div>
                  </div>
                </div>

                <div className='text-[10px] text-text-muted'>
                  1h ago
                </div>
              </div>)
            })
          ) : (
            <div className='h-full w-full flex items-center justify-center'>
              <img 
                src={EmptyActivity}
                alt="empty-activity" 
                className='h-30 w-30'
              />
            </div>
          )
        }


      </div>
    </div>
  )
}

export default PermissionsActivity;