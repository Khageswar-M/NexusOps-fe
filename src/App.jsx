import AsideScreen from "./screens/Aside/AsideScreen";
import HeaderScreen from "./screens/Header/HeaderScreen";
import HeroScreen from "./screens/Hero/HeroScreen";
import OperationsSubTabs from "./components/OperationsSubTabs";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isLocation = location.pathname.startsWith("/user-management");

  return (
    <main
      className={`grid grid-cols-[20%_1fr] ${isLocation ? "grid-rows-[10%_6%_1fr]" : "grid-rows-[10%_1fr]"} gap-2 h-screen p-2`}
    >
      <AsideScreen isLocation={isLocation}/>
      <HeaderScreen />
      {isLocation && <OperationsSubTabs />}
      <HeroScreen />
    </main>
  );
};

export default App;