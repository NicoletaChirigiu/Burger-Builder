import React from 'react';

import burgerLogo from '../../assets/images/Burger-Logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="My burger" />
  </div>
);

export default logo;
