import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from '..';

import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

afterEach(cleanup)


it('renders Navbar without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  act(() => {
    root.render(<NavBar />);
  });
});

