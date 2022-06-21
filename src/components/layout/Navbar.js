import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import logo from '../../image/planet.png';

const Navbar = () => (
  <nav className={classes.navbar}>
    <div className={classes.header}>
      <img src={logo} className={classes.logo} alt="log" />
      <h1>
        Space Traveller
        <span className={classes.before}>
          s
        </span>
        {' '}
        Hub
      </h1>
    </div>
    <ul className={classes.links_container}>
      <li><NavLink to="/rocket">Rocket</NavLink></li>
      <li><NavLink to="/rocket">Mission</NavLink></li>
      <li><NavLink to="/rocket">My profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
