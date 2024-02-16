const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show": ""}`}>
            {submenus.map((submenu, index) => {
                return (
                    <li key={index} class="navigation-bar__dropdown-menu">
                        <a href={submenu.url}>{submenu.title}</a>
                    </li>
                )
            })}
        </ul>
    )
}

export default Dropdown;