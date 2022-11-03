import React, { createContext, useContext, useState } from "react";
import submenuLinks from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({ page: "", links: [] });
    const [location, setLocation] = useState({});

    const openSubmenu = (text, coordinates) => {
        const page = submenuLinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return <AppContext.Provider
        value={{
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            page,
            location
        }}
    >
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };