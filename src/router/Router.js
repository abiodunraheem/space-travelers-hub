import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../components/Home';

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
  </Routes>
);

AllRouter.propTypes = propTypes;
AllRouter.defaultProps = defaultProps;
// #endregion

export default AllRouter;
