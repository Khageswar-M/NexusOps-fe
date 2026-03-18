import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const SystemSettings = () => {

  const {setTitle} = useContext(AppContext);
  useEffect(() => {
    setTitle("System Settings")
  }, []);
  
  return (
    <div>SystemSettings</div>
  )
}

export default SystemSettings;