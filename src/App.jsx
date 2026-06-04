import AsideScreen from "./screens/Aside/AsideScreen";
import HeaderScreen from "./screens/Header/HeaderScreen";
import HeroScreen from "./screens/Hero/HeroScreen";
import OperationsSubTabs from "./components/OperationsSubTabs";
import { Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/Loading";
import ApplicationLoader from "./components/ApplicationLoader";
import { Suspense, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setScreenWidth } from "./redux/appSlice";
import { setOpenSidebar } from "./redux/uiSlice";
import AuthLayout from "./pages/LoginSignup/AuthLayout";
import LoginPage from "./pages/LoginSignup/LoginPage";
import SignupPage from "./pages/LoginSignup/SignupPage";
import ForgetPasswordPage from "./pages/LoginSignup/ForgetPasswordPage";

const App = () => {
  const location = useLocation();
  const isLocation = location.pathname.startsWith("/user-management");
  const [doingLoginSignup, setLoginSignup] = useState(true);


  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  const dispatch = useDispatch();
  useEffect(() => {
    const setWidth = () => {
      dispatch(setScreenWidth(window.innerWidth));
    };

    setWidth();

    window.addEventListener("resize", setWidth);

    return () => window.removeEventListener("resize", setWidth);
  }, [dispatch]);
  const width = useSelector((state) => state.app.width);
  const sidebarOpen = useSelector((state) => state.ui.openSidebar);

  if (isLoading) {
    return (
      <div className="flex-1 h-full w-full absolute bg-surface">
        {/* <ApplicationLoader/> */}
        <Loading/>
      </div>
    )
  }

  return (

    <main className={`h-screen p-2 overflow-hidden`}>

      {
        doingLoginSignup ? (
          <Routes>
            <Route path="/auth" element={<AuthLayout/>}>
              <Route path="login" element={<LoginPage />} />
              <Route path="sign-up" element={<SignupPage />} />
              <Route path="forget-password" element={<ForgetPasswordPage/>}/>
            </Route>
          </Routes>
        ) : (
          <div className={`h-full gap-2 flex flex-row relative`}>
            {
              width <= 900 ? (
                <>
                  {sidebarOpen &&
                    <div
                      className="h-full w-full z-40 bg-black/40 absolute"
                      onClick={() => dispatch(setOpenSidebar(false))}
                    />
                  }

                  <div className={`absolute z-50 top-0 left-0 h-full transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-[110%]"}`}>
                    <AsideScreen />
                  </div>
                </>
              ) : (
                <AsideScreen />
              )
            }

            <div className={`h-full w-full`}>
              <div className={`flex h-full w-full flex-col gap-2 overflow-hidden`}>
                <HeaderScreen />
                {isLocation && <OperationsSubTabs />}
                <HeroScreen />
              </div>
            </div>
          </div>
        )
      }

    </main>
  );
};

export default App;