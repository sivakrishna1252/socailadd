import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeModeContext = createContext({ theme: "dark", toggleTheme: () => { } });

export const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    // Force dark for this project as per global.css
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    return (
        <ThemeModeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeModeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeModeContext);
