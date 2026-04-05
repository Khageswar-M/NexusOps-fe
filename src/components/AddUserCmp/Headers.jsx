import React from 'react'

const Headers = ({Logo, title}) => {
    return (
        <div className="flex flex-row items-center gap-2 px-2 p-1 border-b border-border">
            {Logo}
            <div className="text-text-muted text-[15px]  font-bold">
                {title}
            </div>
        </div>
    )
}

export default Headers