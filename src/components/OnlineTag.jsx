
const OnlineTag = ({ diameter, bgColor, shadow = false, circle = false, box = false }) => {
    const colorMap = {
        red: {
            bg: "bg-red-500",
            shadow: "shadow-[0_0_6px_red]",
        },
        green: {
            bg: "bg-green-500",
            shadow: "shadow-[0_0_6px_green]",
        },
        blue: {
            bg: "bg-blue-500",
            shadow: "shadow-[0_0_6px_blue]",
        },
        yellow: {
            bg: "bg-yellow-500",
            shadow: "shadow-[0_0_6px_yellow]",
        },
        orange: {
            bg: "bg-orange-500",
            shadow: "shadow-[0_0_6px_orange]",
        },
        purple: {
            bg: "bg-purple-500",
            shadow: "shadow-[0_0_6px_purple]",
        },
        cyan: {
            bg: "bg-cyan-500",
            shadow: "shadow-[0_0_6px_cyan]",
        },
        gray:{
            bg: "bg-gray-500",
            shadow: "shadow-[0_0_6px_gray]",
        }
    };
    const color = colorMap[bgColor] || colorMap.green;

    return (
        <div className={`
            ${color.bg} 
            rounded-full
            ${shadow && color.shadow}`
        } 
        style={{width: `${diameter}px`, height: `${diameter}px`}}
        />
    )
}

export default OnlineTag;