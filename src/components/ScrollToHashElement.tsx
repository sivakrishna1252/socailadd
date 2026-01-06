import { useEffect } from "react";

export const ScrollToHashElement = () => {
    useEffect(() => {
        const handleHashChange = () => {
            const { hash } = window.location;
            if (hash) {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        window.addEventListener("hashchange", handleHashChange);
        // Initial check
        handleHashChange();

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return null;
};
