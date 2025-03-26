import React, { useEffect, useState } from "react";
import { Moon, Star, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem("theme"));
    console.log(theme, "====theme");

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        console.log(root.classList, "====classNames");
    }, [theme]);

    const handleTheme = (value) => {
        localStorage.setItem("theme", value);
        setTheme(value);
    };

    // document.querySelector("html").setAttribute("data-theme", isDarkMode ? "light" : "dark");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    {/* <span className="sr-only">Toggle theme</span> */}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
