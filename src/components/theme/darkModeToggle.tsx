import React from 'react';
import { ThemeContext } from './darkMode';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Toggle = () => {
    const { theme, setTheme }: any = React.useContext(ThemeContext);
    return (
        <div className="flex cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? (<>
                <BsFillSunFill size={15}
                    className="text-gold dark:text-gold text-lg mt-1 mr-2 || transition duration-500 ease-in-out"
                />
                <p className="text-[9px] font-light mt-.5 text-gray-400">Light Mode</p>
            </>) : (<>
                <BsFillMoonStarsFill size={14}
                    className="text-black dark:text-black text-lg cursor-pointer mt-1 mr-2 || transition duration-500 ease-in-out"
                />
                <p className="text-[9px] font-light mt-.5 text-gray-600 ">Dark Mode</p>
            </>)
            }
        </div>
    );
};

export default Toggle;