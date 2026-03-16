import React from 'react'

const KpiCards = () => {

    const boxes = Array.from({ length: 4 });

    return (
        <div className='row-span-2 rounded-md grid grid-cols-4 gap-2 [&>div]:bg-[hsl(0,0%,40%)] [&>div]:rounded-md'>
            {
                boxes.map((_, index) => {
                    return (
                        <div 
                            key={index}
                            className='flex items-center justify-center text-white font-bold shadow-[0px_0px_5px_rgba(0,0,0,0.3)]'
                        >
                            {`Box ${index + 1}`}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default KpiCards;