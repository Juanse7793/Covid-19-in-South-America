import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Details from './details';

describe('Home', () => {
  it('renders the Details page and make a snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
