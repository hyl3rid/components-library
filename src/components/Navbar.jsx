import './Navbar.css';
import { menuItemsData } from '../menuItemsData.js';
import MenuItems from './MenuItems';

function Navbar({position = "default"}) {
  if (position === "default") {
    return (
      <nav class="navigation-bar">
        <h1 class="navigation-bar__logo">LOGO</h1>
        <ul class="navigation-bar__nav-links">
        
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}

        </ul>
      </nav>
    );
  } else {
    return (
      <nav class="navigation-bar navigation-bar--center">
          <ul class="navigation-bar__nav-links navigation-bar__nav-links--left">
            {menuItemsData.map((menu, index) => {
              if (index < 3) {
                return <MenuItems items={menu} key={index} />;
              }
            })}
          </ul>
          <h1 class="navigation-bar__logo">LOGO</h1>
          <ul class="navigation-bar__nav-links navigation-bar__nav-links--right">
            {menuItemsData.map((menu, index) => {
              if (index >= 3) {
                return <MenuItems items={menu} key={index} />;
              }
            })}
          </ul>
      </nav>
    );
  }
}

export default Navbar;
