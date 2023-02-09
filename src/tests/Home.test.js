import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Home from '../components/Home'
import '@testing-library/jest-dom';
import store from '../redux/configureStore';

describe('Testing page deployment', () => {
  test('Profile components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
