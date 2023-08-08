import logo from './images/logo.png';
import icons from './images/biticons.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="header">
          <img src={icons} className="icons" alt="logo" />
          <h1>Enterprise Adoption Partner</h1>
        </div>
        <footer>
          <img src={logo} className="logo" alt="logo" />
          <p>COMING SOON</p>
          <p>2023</p>
        </footer>
    </div>
  );
}

export default App;
