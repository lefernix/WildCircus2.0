import React, {useState} from 'react';
import menu from './logo/menu.png';
import close from './logo/close.png';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Header() {
    const [handleMenu, setHandleMenu] = useState(false);
    
    return (
        <div className="header">
            <button type='button' className="menu__burger" onClick={() => setHandleMenu(!handleMenu)}>
                {!handleMenu ?
                <img src={menu} alt='burger__menu__logo'></img>
                : <img src={close} alt='burger__menu__logo__close'></img>}
            </button>
        <div className="menu__wrapper">
            {handleMenu && (
                <div className="burger__container">
                    <ul className="list__container__nav">
                        <li className="list__item__nav">
                            <Link to="/notrehistoire">Notre histoire</Link>
                        </li>
                        <li className="list__item__nav">
                            <Link to="/nostarifsprestations">Nos tarifs / prestations</Link>
                        </li>
                        <li className="list__item__nav">
                            <Link to="/lequipe">L'équipe</Link>
                        </li>
                        <li className="list__item__nav">
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </div>
    );
}

export default Header;