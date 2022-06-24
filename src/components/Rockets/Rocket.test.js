import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Rocket from './Rocket';
import '@testing-library/jest-dom';
import store from '../../redux/ConfigureStore';

const MockRocketComponent = () => (
  <Provider store={store}>
    <Rocket />
  </Provider>
);

describe('Test for rocket component', () => {
  it('It should render rocket component', () => {
    render(<MockRocketComponent />);
    const rocketsData = screen.getByText('Rocket');
    expect(rocketsData).toBeInTheDocument();
  });
});
