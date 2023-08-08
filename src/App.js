import logo from './images/logo.png';
import icons from './images/biticons.png';
import {CiMail} from 'react-icons/ci';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="header">
          <img src={icons} className="icons" alt="icons" />
          <h1>Enterprise Adoption Partnerr</h1>
        </div>
        <img src={logo} className="logo" alt="logo" />
        <div className='email'><CiMail /><a href="mailto: shawn@betweenbits.io">shawn@betweenbits.io</a></div>  
        <footer>
          <p>COMING SOON</p>
          <p>2023</p>
        </footer>
    </div>
  );
}

export default App;
