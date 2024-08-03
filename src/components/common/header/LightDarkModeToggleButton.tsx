"use client"
import React, {useState} from 'react'
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeToggleButton = () => {
    const { setTheme } = useTheme();
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark') ?? "dark";
        }
        return "light";
    });

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark');
        setIsDark(!isDark);
    };

    return (
        <div className="relative w-12 h-6 flex items-center justify-center">
            <button
                onClick={toggleTheme}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isDark ? 'bg-gray-600' : 'bg-yellow-400'}`}
            >
                <div
                    className={`absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-1'}`}>
                    {isDark ? <MoonIcon className="h-4 w-4 text-white"/> : <SunIcon className="h-4 w-4 text-yellow-800"/>}
                </div>
            </button>
        </div>
    )
}

export default ThemeToggleButton