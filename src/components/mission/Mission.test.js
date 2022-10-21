import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Mission from './Mission';
import '@testing-library/jest-dom';
import store from '../../redux/ConfigureStore';

const MockMissionComponent = () => (
  <Provider store={store}>
    <Mission />
  </Provider>
);

describe('Test for mission component', () => {
  it('It should render mission component', () => {
    render(<MockMissionComponent />);
    const missionsData = screen.getByText('Mission');
    expect(missionsData).toBeInTheDocument();
  });
});
