import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';


const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

    return (
        <li className="navigation-bar__link-item" onClick={() => setDropdown((prev) => !prev)}  ref={ref}>
            {items.submenu ? (
                <>
                    <button 
                    className="navigation-bar__submenu"
                    aria-expanded={dropdown ? "true" : "false"}
                    >
                        {items.title}
                    </button>
                
                    {items.downChevron && <div className="navigation-bar__down-chevron">{items.downChevron}</div>}
                    <Dropdown submenus={items.submenu} dropdown={dropdown}/>
                </>
            ) : (
                <>
                    <Link to={items.url}>{items.title}</Link>
                </>
            )}
        </li>
    )
}

export default MenuItems;