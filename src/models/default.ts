import { IJob } from '.';

export const DEFAULT_JOBS: IJob[] = [
  {
    id: 1,
    status: 'active',
    dateCreated: new Date(),
    client: {
      name: 'Jose Santos',
      phoneno: 3847438357,
      email: 'j.santos@mail.com',
    },
    // note?: string
  },
  {
    id: 2,
    status: 'active',
    dateCreated: new Date(),
    client: {
      name: 'Evan Hansen',
      phoneno: 3848393782,
      email: 'e.hansen@mail.com',
    },
    // note?: string
  },
];
