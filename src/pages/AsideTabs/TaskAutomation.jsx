import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const TaskAutomation = () => {

  const {setTitle} = useContext(AppContext);
  useEffect(() => {
    setTitle("Task Automation");
  }, []);
  return (
    <div>TaskAutomation</div>
  )
}

export default TaskAutomation;