import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import logo from '../../image/planet.png';

const Navbar = () => (
  <nav className={classes.navbar}>
    <div className={classes.header}>
      <NavLink to="/"><img src={logo} className={classes.logo} alt="log" /></NavLink>
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
      <li><NavLink to="/mission">Mission</NavLink></li>
      <li><NavLink to="/profile">My profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
