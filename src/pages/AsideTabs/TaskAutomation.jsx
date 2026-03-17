import { titleIs } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const TaskAutomation = () => {

  const {setTitle} = useContext(titleIs);
  useEffect(() => {
    setTitle("Task Automation");
  }, []);
  return (
    <div>TaskAutomation</div>
  )
}

export default TaskAutomation;