import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <section class="navigation-bar__container">
          <Navbar position="center"/>
        </section>
      </header>
    </div>
  );
}

export default App;
