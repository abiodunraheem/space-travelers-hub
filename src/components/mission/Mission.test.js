import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Mission from './Mission';

describe('Test mission component', () => {
  it('It should render mission component', () => {
    const mission = renderer
      .create(<Router><Mission /></Router>)
      .toJSON();
    expect(mission).toMatchSnapshot();
  });
});
