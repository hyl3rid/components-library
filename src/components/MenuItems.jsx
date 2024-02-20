import { useState, useEffect, useRef } from "react";
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
        <li class="navigation-bar__link-item" onClick={() => setDropdown((prev) => !prev)}  ref={ref}>
            {items.submenu ? (
                <>
                    <button 
                    class="navigation-bar__submenu"
                    aria-expanded={dropdown ? "true" : "false"}
                    >
                        {items.title}
                    </button>
                
                    {items.downChevron && <div class="navigation-bar__down-chevron">{items.downChevron}</div>}
                    <Dropdown submenus={items.submenu} dropdown={dropdown}/>
                </>
            ) : (
                <>
                    <a href="{items.url}">{items.title}</a>
                </>
            )}
        </li>
    )
}

export default MenuItems;