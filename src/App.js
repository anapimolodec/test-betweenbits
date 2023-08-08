import logo from './images/logo.png';
import icons from './images/biticons.png';
import MailLogo from './MailLogo';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="header">
          <img src={icons} className="icons" alt="icons" />
          <h1>Enterprise Adoption Partnerr</h1>
        </div>
        <MailLogo />
        <footer>
          <img src={logo} className="logo" alt="logo" />

          <p>COMING SOON</p>
          <p>2023</p>
        </footer>
    </div>
  );
}

export default App;
