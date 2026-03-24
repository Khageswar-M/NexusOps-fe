import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {

    const [title, setTitle] = useState([]);

    const displayTitle = title.length == 0 ? "Dashboard" : title.join(" > ");

    
  return (
    <AppContext.Provider value={{title, setTitle, displayTitle}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;