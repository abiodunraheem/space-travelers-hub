import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Mission from '../components/mission/Mission';
import Profile from '../components/Profile/Profile';
import Rocket from '../components/Rockets/rockets';

const propTypes = {};

const defaultProps = {};

/**
 *
 */
const AllRouter = () => (
  <Routes>
    <Route exact path="/" element={<Rocket />} />
    <Route path="/mission" element={<Mission />} />
    <Route path="/rocket" element={<Rocket />} />
    <Route path="/profile" element={<Profile />} />

  </Routes>
);

AllRouter.propTypes = propTypes;
AllRouter.defaultProps = defaultProps;
// #endregion

