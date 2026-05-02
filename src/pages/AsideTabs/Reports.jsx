import { useEffect } from "react";

// redux
import { useDispatch } from "react-redux";
import { setTitle } from "../../redux/appSlice";

const Reports = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(["Reports"]));
  }, [dispatch]);

  return (
    <div
      className="grid grid-rows-1 grid-cols-[3fr_1fr] gap-2 h-full overflow-hidden"
    >
      {/* COLUMN 1 -> ALL REPORTS*/}
      <div className="bg-surface border border-border rounded-md">1</div>

      {/* COLUMN 2 */}
      <div className="flex flex-col gap-2 [&>div]:bg-surface overflow-y-auto custom-scrollbar">

        {/* QUICK GENERATE */}
        <div className="border border-border rounded-md min-h-50">1</div>

        {/* BY CATEGORY */}
        <div className="border border-border rounded-md min-h-80">2</div>

        {/* UPCOMMIT SCHEDULES */}
        <div className="border border-border rounded-md min-h-50">3</div>

      </div>
    </div>
  )
}

export default Reports