import AsideScreen from "./screens/Aside/AsideScreen";
import HeaderScreen from "./screens/Header/HeaderScreen";
import HeroScreen from "./screens/Hero/HeroScreen";
import OperationsSubTabs from "./components/OperationsSubTabs";
import { useLocation } from "react-router-dom";
import Loading from "./components/Loading";
import ApplicationLoader from "./components/ApplicationLoader";
import { useEffect, useState } from "react";

const App = () => {
  const location = useLocation();
  const isLocation = location.pathname.startsWith("/user-management");

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  if(isLoading){
    return (
      <div className="flex-1 h-full w-full absolute bg-surface">
        <ApplicationLoader/>
      </div>
      )
  }

  return (
    <main
      className={`grid grid-cols-[1fr_4fr] 
        ${isLocation ? "grid-rows-[10%_6%_1fr]" : "grid-rows-[10%_1fr]"} gap-2 h-screen p-2`}
    >

      <AsideScreen isLocation={isLocation} />
      <HeaderScreen />
      {isLocation && <OperationsSubTabs />}
      <HeroScreen />
          </main>
  );
};

export default App;