import { titleIs } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const SystemSettings = () => {

  const {setTitle} = useContext(titleIs);
  useEffect(() => {
    setTitle("System Settings")
  }, []);
  
  return (
    <div>SystemSettings</div>
  )
}

export default SystemSettings;