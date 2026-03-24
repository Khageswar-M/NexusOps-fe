import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const Reports = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle(["Reports"]);
  }, []);

  return (
    <div>Reports</div>
  )
}

export default Reports