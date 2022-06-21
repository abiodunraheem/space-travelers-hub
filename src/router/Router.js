import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../components/Home';
import Mission from '../components/mission/Mission';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const AllRouter = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/mission" element={<Mission />} />

  </Routes>
);

AllRouter.propTypes = propTypes;
AllRouter.defaultProps = defaultProps;
// #endregion

export default AllRouter;
