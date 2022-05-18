import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Home from './home';

describe('Home', () => {
  it('renders the Home Page and make a snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
