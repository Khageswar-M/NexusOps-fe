import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { LiaAngleDownSolid as Down, LiaAngleUpSolid as Up } from "react-icons/lia";
import OnlineTag from '../OnlineTag';
import { useState } from 'react';
import Paper from '@mui/material/Paper';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: 'rgb(55, 65, 81)',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',

        '& .MuiMenu-list': {
            padding: '4px 0',
        },

        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

const HandleActivity = ({ item }) => {
    return (
        <div className={`py-0.5 flex items-center gap-2 px-3 rounded-full border ${item.borderCol} ${item.textCol} ${item.bgCol}`}>
            <OnlineTag diameter={8} bgColor={item.color} />
            <h4 className='text-[10px]'>{item.title}</h4>
        </div>
    )
}

const CustomizedMenu = ({ items, handleClick, anchorEl, open, handleClose, setIsRole }) => {
    const [activeItem, setActiveItem] = useState(items[0]);

    return (
        <div className=' h-full w-full absolute flex items-center'>
            <div
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                onClick={handleClick}
                className='text-text-muted flex items-center gap-2 w-full'
            >
                <HandleActivity item={activeItem}/>
            </div>

            <StyledMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': 'demo-customized-button',
                    },
                    paper: {
                        sx: {
                            backgroundColor: '#1e1e2f', // your color
                            color: '#fff',
                        },
                    },

                }}

            >


                {items.map((item, i) => (
                    <MenuItem
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClose();
                            setActiveItem(item);
                            setIsRole(prev => !prev);
                        }}
                        key={i}
                        sx={{ gap: 2, }}
                    >
                        <HandleActivity item={item}/>
                    </MenuItem>
                ))}

            </StyledMenu>
        </div>
    );
}

export default CustomizedMenu