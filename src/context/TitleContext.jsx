import { createContext, useContext, useState } from "react";

export const titleIs = createContext();

const TitleContextProvider = ({children}) => {

    const [title, setTitle] = useState("Dashboard");

  return (
    <titleIs.Provider value={{title, setTitle}}>
        {children}
    </titleIs.Provider>
  )
}

export default TitleContextProvider;