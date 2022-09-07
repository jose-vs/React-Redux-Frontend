import React from 'react';
import { ListItem } from '../../components';
import { RootState } from '../../../models/root-store/root-store';
import { useSelector, useDispatch } from 'react-redux';
import { FaFilter, FaSort } from 'react-icons/fa';
import { filterJobs, sortRecent, sortOldest } from '../../../models/app-slice/jobSlice';
import { JobStatusType } from '../../../models';

const HomePage = () => {
  const jobs = useSelector((state: RootState) => state.job);
  const dispatch = useDispatch();

  const statusdropDownItem = (name: JobStatusType) => {
    return (
      <h4
        onClick={() => {
          dispatch(filterJobs(name));
        }}
      >
        {name}
      </h4>
    );
  };

  return (
    <div className="jobs">
      <div className="jobs-header">
        <h2 className="jobs-title">Jobs</h2>
        <div>
          <span className="dropdown">
            <FaFilter />
            <div className="dropdown-content">
              {statusdropDownItem('Active')}
              {statusdropDownItem('Scheduled')}
              {statusdropDownItem('Invoicing')}
              {statusdropDownItem('To Price')}
              {statusdropDownItem('Completed')}
            </div>
          </span>
          <span className="dropdown">
            <FaSort />
            <div className="dropdown-content">
              <h4
                onClick={() => {
                  dispatch(sortRecent());
                }}
              >
                Sort Recent
              </h4>
              <h4
                onClick={() => {
                  dispatch(sortOldest());
                }}
              >
                Sort Oldest
              </h4>
            </div>
          </span>
        </div>
      </div>
      <div className="jobs-list">
        {jobs.map((job, index) => {
          return <ListItem key={index} job={job} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
