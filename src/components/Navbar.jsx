import './Navbar.css';

function Navbar({position = "default"}) {
  if (position === "default") {
    return (
      <nav class="navigation-bar">
        <h1 class="navigation-bar__logo">LOGO</h1>
        <ul class="navigation-bar__nav-links">
          <li>NavLink</li>
          <li>NavLink</li>
          <li>NavLink</li>
          <li>Login</li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav class="navigation-bar navigation-bar--center">
          <ul class="navigation-bar__nav-links navigation-bar__nav-links--left">
            <li>NavLink</li>
            <li>NavLink</li>
          </ul>
          <h1 class="navigation-bar__logo">LOGO</h1>
          <ul class="navigation-bar__nav-links navigation-bar__nav-links--right">
            <li>NavLink</li>
            <li>Login</li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;
