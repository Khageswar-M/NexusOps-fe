import { AppContext } from "../../context/TitleContext";
import { useContext } from "react";

const HeaderScreen = () => {

    const{title} = useContext(AppContext);


    return (
        <div className="bg-[hsl(0,0%,30%)] rounded-md flex items-center">
            <h1 className="text-white px-5 font-poppins text-2xl font-bold">
                {title}
            </h1>
        </div> 
    )
}

export default HeaderScreen;