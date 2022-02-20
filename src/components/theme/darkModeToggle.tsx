import React from 'react';
import { ThemeContext } from './darkMode';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Toggle = () => {
    const { theme, setTheme }: any = React.useContext(ThemeContext);
    const [browserTheme, setBrowserTheme] = React.useState();
    
    //causing hydration error... so I had to do this to ensure the website default theme on visitors device is loaded first.
    React.useEffect(() =>{
        setBrowserTheme(theme);
    }, [theme, browserTheme])
    
    return (
        <div className="flex cursor-pointer drop-shadow-lg" onClick={() => setTheme(browserTheme === 'dark' ? 'light' : 'dark')}>
            {browserTheme === 'dark' ? (<>
                <BsFillSunFill size={15}
                    className="text-gold dark:text-gold text-lg mt-1 mr-1.5 || transition duration-500 ease-in-out"
                />
                <p className="text-[9px] font-bold mt-.5 text-gray-400 italic">Light Mode</p>
            </>) : (<>
                <BsFillMoonStarsFill size={14}
                    className="text-black dark:text-black text-lg cursor-pointer mt-1 mr-1.5 || transition duration-500 ease-in-out"
                />
                <p className="text-[9px] font-bold mt-.5 text-gray-600 italic">Dark Mode</p>
            </>)
            }
        </div>
    );
};

export default Toggle;