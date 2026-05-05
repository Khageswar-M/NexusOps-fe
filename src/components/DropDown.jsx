import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Arrow from '../assets/ArrowUpDown.svg?react'

export default function DropDown({ items }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [currentItem, setCurrentItem] = useState(items[0]);
    console.log(currentItem);

    return (
        <div className='w-fit'>
            <Button
                onClick={handleClick}
                fullWidth
            >
                <div className="flex items-center justify-between w-full bg-surface-2 px-2 rounded-md border border-border py-0.5">
                    <div className={`${currentItem.textCol} px-3 text-[0.8rem] font-bold rounded-md w-full`}>
                        {currentItem.title}
                    </div>

                    <Arrow className={`${open ? "rotate-180" : ""} text-gray-600`} />
                </div>
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                    paper: {
                        sx: {
                            backgroundColor: "#1F2937"
                        }
                    }
                }}

            >
                {
                    items.map((item, i) => {
                        return (
                            <MenuItem
                                onClick={handleClose}
                                key={i}
                                className='w-full'
                            >
                                <div className={`${item.textCol} ${item.bgCol} w-it px-3 rounded-md font-bold text-[1rem]`}
                                    onClick={() => setCurrentItem(item)}
                                >
                                    {item.title}
                                </div>
                            </MenuItem>
                        )
                    })
                }

            </Menu>
        </div>
    );
}