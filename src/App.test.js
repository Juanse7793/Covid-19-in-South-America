import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from './Redux/configureStore';
import App from './App';

const appRender = () => render(
  <Provider store={store}>
    <App />
  </Provider>,
);

describe('App', () => {
  it('renders without crashing', () => {
    appRender();
  });
  it('renders the title', () => {
    appRender();
    expect(screen.getByText('Covid 19 in South American Countries')).toBeInTheDocument();
  });
  it('renders the subtitle', () => {
    appRender();
    expect(screen.getByText('South America')).toBeInTheDocument();
  });
  it('renders the description', () => {
    appRender();
    expect(screen.getByText('442.5M hab')).toBeInTheDocument();
  });
  it('renders the stats by country', () => {
    appRender();
    expect(screen.getByText('STATS BY COUNTRY')).toBeInTheDocument();
  });
});
