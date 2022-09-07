import React from 'react';
import { useSelector } from 'react-redux';
import { IJob } from '../models';
import { RootState } from '../models/root-store/root-store';

export const getJob = (id: number): IJob => {
  const jobs = useSelector((state: RootState) => state.job);

  const job = jobs.find((obj) => {
    return obj.id === id;
  })!;

  return job;
};
