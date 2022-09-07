import HomePage  from '..';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../models/root-store/root-store';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup)

it('renders HomePage without crashing', () => {
  render(<Provider store={store}><HomePage/></Provider>, {wrapper: BrowserRouter})
});

