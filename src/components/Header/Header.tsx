import React from 'react';
import style from './Header.module.css'
import logoSVG from './logo/socialHigh.png'
export const Header = () => {
    return (
        <header className={style.header}>
            {/*<img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"*/}
            {/*     alt="logo" className={style.appLogo}/>*/}

            <img src={logoSVG} alt="logo" className={style.appLogo}/>
        </header>
    )
    }