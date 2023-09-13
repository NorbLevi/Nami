import React, { useEffect, useState } from 'react'
import { themes } from '../data'
import ThemeItem from './themeItem'
import { FiSettings } from 'react-icons/fi'
import {BsMoonStarsFill, BsSunFill} from 'react-icons/bs'
import './theme.css'

const getStorageColor = () => {
    let color = 'hsl(252, 35%, 51%)';
    if ( localStorage.getItem('color')){
        color = localStorage.getItem('color')
    }

    return color;
};

const getStorageTheme = () => {
    let theme = 'light-theme';
    if ( localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
    }

    return theme;
};

const Theme = () => {

    const [showSwitch, setShowSwitch] = useState(false);
    const[color, setColor] = useState(getStorageColor());
    const[theme, settheme] = useState(getStorageTheme());

    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = () => {
        if(theme=== 'light-theme') {
            settheme('dark-theme');
        }

        else{
            settheme('light-theme')
        }
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color] );

    useEffect(() => {
        document.documentElement.className  = theme;
        localStorage.setItem('theme', theme);
    }, [theme] );




  return <div>
        <div className={`${showSwitch ? 'show-switch' : ''} style_switcher`}>
            <div className="style_switcher-toogler" onClick={() => setShowSwitch(!showSwitch)}>
                <FiSettings  style={{color: 'white'}}/>
            </div>

            <div className="theme_toogler" onClick={toggleTheme}>
                {theme === 'light-theme' ? <BsMoonStarsFill className='bs_moon'/> : <BsSunFill  className='theme_mode'/>}
            </div>

            <h3 className="style_switcher-title">Switch Style</h3>
            <div className="style_switcher-items">
                {themes.map((theme, index) => {
                    return(<ThemeItem key={index} {...theme} changeColor={changeColor} />)
                })}
            </div>

            <div className="style_switcher-close" onClick={() => setShowSwitch(!showSwitch)}>
                &times;
            </div>
        </div>
  </div>;
}

export default Theme