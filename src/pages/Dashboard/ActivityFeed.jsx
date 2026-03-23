import React from 'react'

const ActivityFeed = () => {
    return (
        <div className=' rounded-md grid grid-cols-[3fr_3fr_2fr] gap-2 h-full [&>div]:rounded-md'>
            <div className='bg-primary flex flex-col'>
                <div className='flex items-center justify-center'>
                    <h3>Activity Feed</h3>
                </div>
            </div>
            <div className='bg-primary'>2</div>
            <div className='grid grid-rows-[1fr_1fr] gap-2 h-full [&>div]:rounded-md'>
                <div className='bg-primary'>1</div>
                <div className='bg-primary'>2</div>
            </div>
        </div>
    )
}

export default ActivityFeed;