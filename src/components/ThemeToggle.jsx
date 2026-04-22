import React from 'react';
import { useTheme } from '@heroui/react';

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme()
    return (
        <div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : "dark")}>
                Toggle {theme === "dark"? "Light": "Dark"} Mode
            </button>
        </div>
    );
};

export default ThemeToggle;