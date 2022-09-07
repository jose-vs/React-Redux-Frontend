import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IJob, JobStatusType } from '..';
import { DEFAULT_JOBS } from '../default';

const initialState: IJob[] = DEFAULT_JOBS;

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    updateJobs: (state, action: PayloadAction<IJob>) => {
      return state.map((obj) => {
        if (obj.id === action.payload.id) {
          return action.payload;
        }
        return obj;
      });
    },
    filterJobs: (state, action: PayloadAction<JobStatusType>) => {
      return state.sort((a, b) => {
        if (a.status === action.payload && b.status !== action.payload) return -1;
        if (a.status !== action.payload && b.status === action.payload) return 1;
        return 0;
      });
    },
    sortRecent: (state) => {
      return state.sort((a, b) => {
        if (a.dateCreated > b.dateCreated) return -1;
        if (a.dateCreated < b.dateCreated) return 1;
        return 0;
      });
    },
    sortOldest: (state) => {
      return state.sort((a, b) => {
        if (a.dateCreated < b.dateCreated) return -1;
        if (a.dateCreated > b.dateCreated) return 1;
        return 0;
      });
    },
  },
});

export const { updateJobs, filterJobs, sortOldest, sortRecent } = jobSlice.actions;

export default jobSlice.reducer;
