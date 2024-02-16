import Navbar from './Navbar.jsx';

function Header() {
  return (
      <header>
        <Navbar/>
        <section class="navigation-bar__container">
          <Navbar position="center"/>
        </section>
      </header>
  );
}

export default Header;
