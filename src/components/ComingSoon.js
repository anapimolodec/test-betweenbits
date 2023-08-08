import React from 'react';
import icons from '../images/biticons.png';
import '../App.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="heading">
        <img src={icons} className="icons" alt="icons" />
        <h1>Enterprise Adoption Partner</h1>
      </div>
      <ul>
        <li>Bitcoin & Lightning Network</li>
        <li>Payment & Transfer</li>
        <li>Channel & Liquidity</li>
      </ul>
    </div>
  );
}

export default ComingSoon;
