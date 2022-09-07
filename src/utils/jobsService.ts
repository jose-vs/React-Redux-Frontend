import React from 'react';
import { IJob } from '../models';
import { DEFAULT_JOBS } from '../models/default';

export const getJob = (id: number): IJob => {
  const job = DEFAULT_JOBS.find((obj) => {
    return obj.id === id;
  });

  if (job) return job;

  throw new Error('job not found');
};
