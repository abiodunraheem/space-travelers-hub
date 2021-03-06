import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from './rockets';
import store from '../../redux/ConfigureStore';

const MockMissionComponent = () => (
  <Provider store={store}>
    <Rockets />
  </Provider>
);
const mockChildComponent = jest.fn();
// eslint-disable-next-line react/display-name
jest.mock('./Rocket', () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

test('If ParentComponent is passed open and has data, ChildComponent is called with prop open and data', () => {
  render(<MockMissionComponent open rocket="some data" />);
  expect(mockChildComponent).not.toHaveBeenCalledWith(
    expect.objectContaining({
      open: true,
      rocket: 'some data',
    }),
  );
});

test('If ParentComponent is not passed open, ChildComponent is not called', () => {
  render(<MockMissionComponent />);
  expect(mockChildComponent).not.toHaveBeenCalled();
});
