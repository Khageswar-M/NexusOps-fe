import { AppContext } from "../../context/TitleContext";
import { useContext, useEffect } from "react";

const TaskAutomation = () => {

  const { setTitle } = useContext(AppContext);
  useEffect(() => {
    setTitle("Task Automation");
  }, []);
  return (
    <div className="grid grid-rows-[2fr_7fr_1fr] gap-2 p-2 h-full">
      <div className=" grid grid-cols-[1fr_1fr_1fr_1fr] gap-2">
        <div className="bg-[hsl(0,0%,40%)]">1</div>
        <div className="bg-[hsl(0,0%,40%)]">2</div>
        <div className="bg-[hsl(0,0%,40%)]">3</div>
        <div className="bg-[hsl(0,0%,40%)]">4</div>
      </div>

      <div className=" grid grid-rows-[1fr_8fr] gap-2">
        <div className=" grid grid-cols-[2fr_2fr_2fr_2fr_1fr] gap-2">
          <div className="bg-[hsl(0,0%,40%)]">Filter by name</div>
          <div className="bg-[hsl(0,0%,40%)]">Filter by status</div>
          <div className="bg-[hsl(0,0%,40%)]">Filter by frequency</div>
          <div className="bg-[hsl(0,0%,40%)]">Search</div>
          <div className="bg-[hsl(0,0%,40%)]">Search</div>
        </div>

        {/* Table */}
        <div className=" grid grid-rows-[1fr_9fr] gap-1">
          {/* Table header */}
          <div className=" grid grid-cols-[2fr_2fr_2fr_2fr_2fr] gap-1">
            <div className="bg-[hsl(0,0%,40%)] text-center">Task Name</div>
            <div className="bg-[hsl(0,0%,40%)]">Status</div>
            <div className="bg-[hsl(0,0%,40%)]">Frequency</div>
            <div className="bg-[hsl(0,0%,40%)]">Last Run</div>
            <div className="bg-[hsl(0,0%,40%)]">Actions</div>
          </div>

          {/* Table body */}
          <div className=" grid grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-1">
            {Array.from({ length: 7 }).map((_, id) => {
              return (
                <div
                  key={id}
                  className="grid grid-cols-[2fr_2fr_2fr_2fr_2fr] gap-1"
                >
                  <div className=" grid grid-cols-[1fr_4fr] gap-1">
                    <div className="bg-[hsl(0,0%,40%)] flex items-center justify-center">1</div>
                    <div className="bg-[hsl(0,0%,40%)] flex items-center">2</div>
                  </div>
                  <div className="bg-[hsl(0,0%,40%)] flex items-center">Status</div>
                  <div className="bg-[hsl(0,0%,40%)] flex items-center">Frequency</div>
                  <div className="bg-[hsl(0,0%,40%)] flex items-center">Last Run</div>
                  <div className=" grid grid-cols-[2fr_4fr] gap-1 [&>div]:flex [&>div]:items-center">
                    <div className="bg-[hsl(0,0%,40%)]">Edit</div>
                    <div className="bg-[hsl(0,0%,40%)]">Delete</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="bg-[hsl(0,0%,40%)] w-[20%]">1</div>
        <div className="bg-[hsl(0,0%,40%)] w-[20%]">2</div>
      </div>
    </div>
  )
}

export default TaskAutomation;