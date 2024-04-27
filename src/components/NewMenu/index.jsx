import { Link } from "react-router-dom";
import "./NewMenu.scss";
import { useState } from "react";
const NewMenu = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
    setMainMenu(!mainMenu);
  };
  console.log("toggleMenu" + isMenuVisible);
  return (
    <nav
      id="NewMenu__nav"
      className={`NewMenu__nav ${isMenuVisible ? "NewMenu__nav__show" : ""}`}
    >
      <div
        id="NewMenu__nav__toggle__menu"
        className={`NewMenu__nav__toggle__menu ${
          isMenuVisible ? "newMenu__nav__toggle__menu__show " : ""
        }`}
        onClick={toggleMenu}
      >
        <img
          src="https://icon-library.com/images/hamburger-menu-icon-png-white/hamburger-menu-icon-png-white-10.jpg"
          className={`NewMenu__nav__toggle__menu__icon ${
            isMenuVisible ? "NewMenu__nav__toggle__menu__icon__show " : ""
          }`}
        />
      </div>
      <ul
        className={`NewMenu__nav__main__menu ${
          mainMenu ? "NewMenu__nav__main__menu__show" : ""
        }`}
      >
        <li className="NewMenu__nav__main__menu__item">
          <Link to="/inventory">Inventario</Link>
        </li>
        <li className="NewMenu__nav__main__menu__item">
          <Link to="/appointment">Cotizaciones</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NewMenu;
