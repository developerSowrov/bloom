"use client"
import { createContext, useState } from "react";
export const Context = createContext();

export default function HeaderProvider({ children }) {
    const [closeTopNavbar,             setCloseTopNavbar] = useState(false);
    const [isMobileNavMenuClose, setIsMobileNavMenuClose] = useState(true);
    const [isShowSearchInput,       setIsShowSearchInput] = useState(false);

  return (
        <Context.Provider value={{          closeTopNavbar,
                                      isMobileNavMenuClose,
                                         isShowSearchInput,
                                         setCloseTopNavbar,
                                   setIsMobileNavMenuClose,
                                      setIsShowSearchInput }}>
            {children}
        </Context.Provider>
    );
};
