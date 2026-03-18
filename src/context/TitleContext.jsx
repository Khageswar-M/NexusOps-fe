import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const [title, setTitle] = useState("Dashboard");

  return (
    <AppContext.Provider value={{title, setTitle}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;