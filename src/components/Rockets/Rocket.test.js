import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Rocket from './Rocket';

describe('Test mission component', () => {
  it('It should render rocket component', () => {
    const rocket = renderer
      .create(<Router><Rocket /></Router>)
      .toJSON();
    expect(rocket).toMatchSnapshot();
  });
});
