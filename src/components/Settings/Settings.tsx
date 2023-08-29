// import React, { useState } from 'react';
// import style from "../NavBar/Navigation.module.css";
// import ss from './Settings.module.css';
//
// export const Settings = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//         const toggleMenu = () => {
//             console.log("Toggle menu clicked");
//         setIsMenuOpen(!isMenuOpen);
//     };
//
//     return (
//         <>
//             <button className={style.toggleButton} onClick={toggleMenu}>
//                 Open Settings
//             </button>
//             {isMenuOpen && (
//                 <aside className={ss.aside}>
//                     <ul>
//                         <li>
//                             <a href="/language" className={ss.active}>Language</a>
//                         </li>
//                         <li>
//                             <a href="/time" className={ss.active}>Time</a>
//                         </li>
//                     </ul>
//                 </aside>
//             )}
//         </>
//     );
// };

import React, { useState } from 'react';
import style from "../NavBar/Navigation.module.css";
import ss from './Settings.module.css';

export const Settings = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <button className={ss.toggleButton} onClick={toggleMenu}>
                Open Settings
            </button>
            <aside className={`${ss.aside} ${isMenuOpen ? ss.open : ''}`}>
                <button className={ss.closeButton} onClick={closeMenu}>
                   Close
                </button>
                <ul>
                    <li>
                        <a href="/language" className={style.active}>Language</a>
                    </li>
                    <li>
                        <a href="/time" className={style.active}>Time</a>
                    </li>
                </ul>
            </aside>
        </>
    );
};

