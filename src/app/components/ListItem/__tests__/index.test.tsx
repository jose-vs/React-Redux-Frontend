import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { ListItem } from '..';
import { IJob } from '../../../../models';

const mockData: IJob = {
  id: 1,
  status: 'Invoicing',
  dateCreated: new Date(2022, 8, 7).toDateString(),
  client: {
    name: 'Jose Santos',
    phoneno: 3847438357,
    email: 'j.santos@mail.com',
  },
  note: 'test note',
};

afterEach(cleanup);

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<ListItem job={mockData} />, div);
// });

it('renders ListItem correctly', () => {
  const { getByTestId } = render(<ListItem job={mockData} />, { wrapper: BrowserRouter });
  expect(getByTestId('list-item'));
});
