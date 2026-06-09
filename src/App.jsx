import AsideScreen from "./screens/Aside/AsideScreen";
import HeaderScreen from "./screens/Header/HeaderScreen";
import HeroScreen from "./screens/Hero/HeroScreen";
import OperationsSubTabs from "./components/OperationsSubTabs";
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import Loading from "./components/Loading";
import ApplicationLoader from "./components/ApplicationLoader";
import { Suspense, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setScreenWidth } from "./redux/appSlice";
import { setOpenSidebar } from "./redux/uiSlice";
import { setLoggedIn } from "./redux/authSlice";
import AuthLayout from "./pages/LoginSignup/AuthLayout";
import LoginPage from "./pages/LoginSignup/LoginPage";
import SignupPage from "./pages/LoginSignup/SignupPage";
import ForgetPasswordPage from "./pages/LoginSignup/ForgetPasswordPage";
import { Toaster } from "react-hot-toast";
import { isJwtExpired } from "./api/auth/authApi";

const App = () => {
  const location = useLocation();
  const isLocation = location.pathname.startsWith("/user-management");
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // set the default loading screen time
  useEffect(() => {
    const checkJwt = async () => {

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?.jwtToken) {
        setIsLoading(false);
        navigate("/auth/login");
        return;
      }

      try {
        const expired = await isJwtExpired(user.jwtToken);

        if (expired) {
          localStorage.removeItem("user");
          dispatch(setLoggedIn(false));
          navigate("/auth/login");
          return;
        }

        dispatch(setLoggedIn(true));
      } catch (error) {
        console.error(error);
        localStorage.removeItem("user");
        dispatch(setLoggedIn(false));
        navigate("/auth/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkJwt();
  }, []);

  const dispatch = useDispatch();

  // reset the screen width at the every window width changes
  useEffect(() => {
    const setWidth = () => {
      dispatch(setScreenWidth(window.innerWidth));
    };

    setWidth();

    window.addEventListener("resize", setWidth);

    return () => window.removeEventListener("resize", setWidth);
  }, [navigate, dispatch]);


  const width = useSelector((state) => state.app.width);
  const sidebarOpen = useSelector((state) => state.ui.openSidebar);

  if (isLoading) {
    return (
      <div className="flex-1 h-full w-full absolute bg-surface">
        {/* <ApplicationLoader/> */}
        <Loading />
      </div>
    )
  }

  return (
    <>
      <Toaster
        toastOptions={{
          position: 'top-right',
        }}
      />
      <main className={`h-screen p-2 overflow-hidden`}>

        {
          isLoggedIn ? (
            <>
              {
                <Routes>
                  <Route
                    path="/auth/*"
                    element={<Navigate to="/dashboard" replace />}
                  />
                </Routes>
              }
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
            </>

          ) : (
            <Routes>
              <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="sign-up" element={<SignupPage />} />
                <Route path="forget-password" element={<ForgetPasswordPage />} />
              </Route>

              <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
          )
        }
      </main>
    </>
  );
};

export default App;