import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/ConfigureStore';
import Profile from './Profile';

it('Profile should render', () => {
  const tree = renderer.create(<Provider store={store}><Profile /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
