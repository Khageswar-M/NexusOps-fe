import { useLocation } from "react-router-dom";
import { operations } from "../../config/operations";
import { titleIs } from "../../context/TitleContext";
import { useContext } from "react";

const HeaderScreen = () => {

    // const location = useLocation();
    const{title} = useContext(titleIs);
    // const currentOperation = operations.find(
    //     (op) => location.pathname.startsWith(op.path)
    // );

    // const title = currentOperation?.title || "Dashboard";


    return (
        <div className="bg-[hsl(0,0%,30%)] rounded-md flex items-center">
            <h1 className="text-white px-5 font-poppins text-2xl font-bold">
                {title}
            </h1>
        </div> 
    )
}

export default HeaderScreen;