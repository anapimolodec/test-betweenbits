import React from 'react';
import logo from '../images/logo.png';
import '../App.css';

const Footer = () => {
  return (
    <div className="footer">
        <div>2023</div>
        <div>COMING SOON</div>
        <div><a href="mailto: shawn@betweenbits.io">shawn@betweenbits.io</a></div>
        <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default Footer;
