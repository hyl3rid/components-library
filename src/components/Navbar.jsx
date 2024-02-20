import './Navbar.css';
import { menuItemsData } from '../menuItemsData.js';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';


function Navbar({position = "default"}) {
  if (position === "default") {
    return (
      <nav className="navigation-bar">
        <Link to="/" className="navigation-bar__logo">
          <span>LOGO</span>
        </Link>
        <ul className="navigation-bar__nav-links">
        
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}

        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="navigation-bar navigation-bar--center">
          <ul className="navigation-bar__nav-links navigation-bar__nav-links--left">
            {menuItemsData.map((menu, index) => {
              if (index < 3) {
                return <MenuItems items={menu} key={index} />;
              } else {
                return ""
              }
            })}
          </ul>
          <Link to="/" className="navigation-bar__logo">
            <span>LOGO</span>
          </Link>
          <ul className="navigation-bar__nav-links navigation-bar__nav-links--right">
            {menuItemsData.map((menu, index) => {
              if (index >= 3) {
                return <MenuItems items={menu} key={index} />;
              } else {
                return ""
              }
            })}
          </ul>
      </nav>
    );
  }
}

export default Navbar;
