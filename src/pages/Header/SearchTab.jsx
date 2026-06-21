import React from 'react'
import { IoClose } from "react-icons/io5";
import SearchIcon from '../../assets/MagnifyingGlass.svg?react';
import { useSelector } from 'react-redux';

const SearchTab = ({setIsSearchOpen}) => {
    const width = useSelector((state) => state.app.width);
    return (
        <div className={`flex flex-col gap-4 bg-surface ${width >= 425 ? "w-100" : "w-80"}  p-2 rounded-md border border-cyan-500 z-50`}>
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className=" text-cyan-500 font-semibold text-lg m-auto">Search</h2>
                <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-text-muted hover:text-white transition-colors cursor-pointer"
                >
                    <IoClose size={24} />
                </button>
            </div>

            {/* Search Input */}
            <div className="relative">
                <SearchIcon className="w-5 h-5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2
      pointer-events-none" />
                <input
                    type="text"
                    autoFocus
                    className="w-full bg-surface-2 border border-border rounded-md py-2.5 pl-10 pr-4
      text-white text-sm placeholder:text-text-muted focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Search anything..."
                />
            </div>

            {/* Recent / Results area */}
            <div className="flex flex-col gap-2">
                <span className="text-text-muted text-xs font-semibold uppercase
      tracking-wider">Recent</span>
                <div className="flex flex-col gap-1">
                    {["Users", "Reports", "Dashboard settings", "Server status"].map((item) => (
                        <button
                            key={item}
                            className="text-left text-sm text-text-muted hover:text-white
      hover:bg-surface-2 px-3 py-2 rounded-md transition-colors cursor-pointer"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchTab;