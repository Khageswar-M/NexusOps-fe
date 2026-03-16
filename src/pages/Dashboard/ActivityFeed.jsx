import React from 'react'

const ActivityFeed = () => {
    const boxes = [
        {title: "Box 1", style: "row-span-4 col-span-3"},
        {title: "Box 2", style: "row-span-4 col-span-2"},
        {title: "Box 3", style: "row-span-2 col-span-2"},
        {title: "Box 4", style: "row-span-2 col-span-2"},
    ];
  return (
    <div className='row-span-4  rounded-md grid grid-rows-4 grid-cols-7 gap-2'>
        {
            boxes.map((box, index) => {
                return(
                    <div
                        key={index}
                        className={`${box.style} bg-[hsl(0,0%,40%)] rounded-md flex items-center justify-center text-white font-bold shadow-[0px_0px_5px_rgba(0,0,0,0.3)]`}
                    >
                        {box.title}
                    </div>
                )
            })
        }
    </div>
  )
}

export default ActivityFeed;