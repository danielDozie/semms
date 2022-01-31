import React from 'react';
import {ThemeContext}  from './darkMode';
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";

const Toggle = () => {
    const { theme, setTheme }:any = React.useContext(ThemeContext);

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
                <div className="flex cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <BsFillSunFill size={15}
                    className="text-gold dark:text-gold text-lg -mt-1 mr-2"
                />
                <p className="text-[9px] font-light -mt-2 md:-mt-1 text-gray-400">Light Mode</p>
                </div>
            ) : (
                <div className="flex cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <BsFillMoonStarsFill size={14}
                        className="text-black dark:text-black text-lg cursor-pointer -mt-1 mr-2"
                    />
            <p className="text-[9px] font-light -mt-2 md:-mt-1 text-gray-600 ">Dark Mode</p>
            </div>
                )}
        </div>
    );
};

export default Toggle;