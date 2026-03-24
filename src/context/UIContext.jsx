import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({children}) => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    return (
        <UIContext.Provider value={{isNotificationOpen, setIsNotificationOpen}}>
            {children}
        </UIContext.Provider>
    )
}