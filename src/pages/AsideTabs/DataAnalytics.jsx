import { titleIs } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const DataAnalytics = () => {

  const {setTitle} = useContext(titleIs);
  useEffect(() => {
    setTitle("Data Analytics");
  }, []);

  return (
    <div>DataAnalytics</div>
  )
}

export default DataAnalytics;