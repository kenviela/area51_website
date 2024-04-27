import { Link } from "react-router-dom";
import "./Menu.scss";
import { useState } from "react";
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="menu-container">
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={isMenuOpen}
        onChange={handleToggleMenu}
      />
      <label htmlFor="menu-toggle" className="menu-toggle-label">
        <div className="menu-toggle-icon"></div>
      </label>
      <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/inventory" className="menu-link">
            inventario
          </Link>
        </li>
        <li>
          <Link to="/appointment">cotizaciones</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
