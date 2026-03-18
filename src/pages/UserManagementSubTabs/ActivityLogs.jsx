import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const ActivityLogs = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle("Activity Logs");
  }, []);

  return (
    <div className="grid grid-rows-[1fr_8fr_1fr] h-full gap-2 p-2">

      <div className="grid grid-cols-[3fr_2fr_3fr_2fr_2fr] gap-2">
        <div className="bg-[hsl(0,0%,40%)]">Filter by action type</div>
        <div className="bg-[hsl(0,0%,40%)]">All users</div>
        <div className="bg-[hsl(0,0%,40%)]">FromDate to ToDate</div>
        <div className="bg-[hsl(0,0%,40%)]">Reset Filters</div>
        <div className="bg-[hsl(0,0%,40%)]">Search</div>
      </div>

      {/*Row 2 Table */}
      <div className=" grid grid-rows-[1fr_2fr_2fr_2fr_2fr_2fr_2fr_2fr] gap-1">

        {/* Table Head */}
        <div className=" grid grid-cols-[3fr_3fr_2fr_2fr_3fr] gap-1 [&>div:not(:nth-child(1)):not(:nth-child(3))]:px-3">
          <div className="bg-[hsl(0,0%,40%)] text-center">Name</div>
          <div className="bg-[hsl(0,0%,40%)]">Email</div>
          <div className="bg-[hsl(0,0%,40%)] text-center">Timestamp</div>
          <div className="bg-[hsl(0,0%,40%)]">Action</div>
          <div className="bg-[hsl(0,0%,40%)]">Description</div>
        </div>

        {/* Table Body */}
        {Array.from({ length: 7 }).map((_, index) => {
          return (
            <div className="grid grid-cols-[3fr_3fr_2fr_2fr_3fr] gap-1 [&>div:not(:nth-child(1)):not(:nth-child(1))]:px-3">
              <div className="grid grid-cols-[1fr_2fr_5fr] gap-1">
                <div className="bg-[hsl(0,0%,40%)] ">1</div>
                <div className="bg-[hsl(0,0%,40%)] ">2</div>
                <div className=" grid grid-rows-[1fr_1fr] gap-1">
                  <div className="bg-[hsl(0,0%,40%)]">1</div>
                  <div className="bg-[hsl(0,0%,40%)]">2</div>
                </div>
              </div>

              <div className="bg-[hsl(0,0%,40%)] grid items-center">Email</div>
              <div className="bg-[hsl(0,0%,40%)] text-center grid items-center">Timestamp</div>
              <div className="bg-[hsl(0,0%,40%)] grid items-center">Action</div>
              <div className="bg-[hsl(0,0%,40%)] grid items-center">Description</div>
            </div>
          )
        })}

      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="w-[20%] bg-[hsl(0,0%,40%)]">1</div>
        <div className="w-[20%] bg-[hsl(0,0%,40%)]">2</div>
      </div>
    </div>
  )
}

export default ActivityLogs;