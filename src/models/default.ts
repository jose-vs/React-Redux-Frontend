import { IJob } from '.';

export const DEFAULT_JOBS: IJob[] = [
  {
    id: 1,
    status: 'Active',
    dateCreated: new Date(),
    client: {
      name: 'Jose Santos',
      phoneno: 3847438357,
      email: 'j.santos@mail.com',
    },
    note: 'test note',
  },
  {
    id: 2,
    status: 'Active',
    dateCreated: new Date(),
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
    dateCreated: new Date(),
    client: {
      name: 'Lydia Deetz',
      phoneno: 3848301278,
      email: 'l.Deetz@mail.com',
    },
    // note?: string
  },
  {
    id: 4,
    status: 'Active',
    dateCreated: new Date(),
    client: {
      name: 'Alexander Hamilton',
      phoneno: 38482047348,
      email: 'a.hamilton@mail.com',
    },
    // note?: string
  },
];
