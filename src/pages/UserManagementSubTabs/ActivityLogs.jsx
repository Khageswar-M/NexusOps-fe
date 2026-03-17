import { titleIs } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const ActivityLogs = () => {

  const {setTitle} = useContext(titleIs);
  useEffect(() => {
    setTitle("Activity Logs");
  }, []);
  
  return (
    <div>ActivityLogs</div>
  )
}

export default ActivityLogs;