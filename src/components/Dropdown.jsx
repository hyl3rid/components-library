import { Link } from 'react-router-dom';

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show": ""}`}>
            {submenus.map((submenu, index) => {
                return (
                    <li key={index} className="navigation-bar__dropdown-menu">
                        <Link to={submenu.url}>{submenu.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Dropdown;