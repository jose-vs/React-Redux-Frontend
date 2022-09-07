import { IJob } from '.';

export const DEFAULT_JOBS: IJob[] = [
  {
    id: 1,
    status: 'Invoicing',
    dateCreated: new Date(2022, 8, 7).toDateString(),
    client: {
      name: 'Jose Santos',
      phoneno: 3847438357,
      email: 'j.santos@mail.com',
    },
    note: 'test note',
  },
  {
    id: 2,
    status: 'Scheduled',
    dateCreated: new Date(2022, 1, 23).toDateString(),
    client: {
      name: 'Evan Hansen',
      phoneno: 3848393782,
      email: 'e.hansen@mail.com',
    },
    // note?: string
  },
  {
    id: 3,
    status: 'Active',
    dateCreated: new Date(2022, 8, 4).toDateString(),
    client: {
      name: 'Lydia Deetz',
      phoneno: 3848301278,
      email: 'l.Deetz@mail.com',
    },
    // note?: string
  },
  {
    id: 4,
    status: 'Completed',
    dateCreated: new Date(2021, 11, 27).toDateString(),
    client: {
      name: 'Alexander Hamilton',
      phoneno: 38482047348,
      email: 'a.hamilton@mail.com',
    },
    // note?: string
  },
];
