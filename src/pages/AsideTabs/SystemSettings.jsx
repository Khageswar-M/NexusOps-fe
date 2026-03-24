import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const SystemSettings = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["System Settings"]);
  }, []);
  
  return (
    <div className="grid grid-rows-[5fr_3fr_3fr_2fr_1fr] h-full gap-2 p-2">
      <div className=" grid grid-rows-[1fr_2fr_1fr] gap-1">
        <div className="bg-[hsl(0,0%,40%)]">1</div>
        <div className="bg-[hsl(0,0%,40%)]">2</div>
        <div className="bg-[hsl(0,0%,40%)]">3</div>
      </div>

      <div className=" grid grid-rows-[1fr_1fr_1fr] gap-1">
        <div className="bg-[hsl(0,0%,40%)]">1</div>
        <div className="bg-[hsl(0,0%,40%)]">2</div>
        <div className="bg-[hsl(0,0%,40%)]">3</div>
      </div>
      <div className=" grid grid-rows-[1fr_1fr_1fr] gap-1">
        <div className="bg-[hsl(0,0%,40%)]">1</div>
        <div className="bg-[hsl(0,0%,40%)]">2</div>
        <div className="bg-[hsl(0,0%,40%)]">3</div>
      </div>
      <div className=" grid grid-rows-[1fr_2fr] gap-1">
        <div className="bg-[hsl(0,0%,40%)]">1</div>
        <div className="bg-[hsl(0,0%,40%)]">2</div>
      </div>
      <div className="flex items-center justify-end">
        <div className="bg-[hsl(0,0%,40%)] w-[20%]">1</div>
      </div>
    </div>
  )
}

export default SystemSettings;