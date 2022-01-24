import React from 'react';
import {ThemeContext}  from './darkMode';
import {BsToggle2On, BsToggle2Off} from "react-icons/bs";

const Toggle = () => {
    const { theme, setTheme }:any = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <BsToggle2Off
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="text-gold dark:text-gold text-lg cursor-pointer -mt-1"
                />
            ) : (
                    <BsToggle2On
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-black dark:text-black text-lg cursor-pointer -mt-1"
                    />
                )}
        </div>
    );
};

export default Toggle;