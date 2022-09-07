import JobPage from '..';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../models/root-store/root-store';

afterEach(cleanup);

it('renders JobPage without crashing', () => {
  render(<Provider store={store}><JobPage/></Provider>, { wrapper: BrowserRouter });
});
