import React from 'react';
import { ListItem } from '../../components';
import { RootState } from '../../../models/root-store/root-store';
import { useSelector, useDispatch } from 'react-redux';
import { FaFilter, FaSort } from 'react-icons/fa';
import { filterJobs, sortRecent, sortOldest } from '../../../models/app-slice/jobSlice';

const HomePage: React.FC = () => {
  const jobs = useSelector((state: RootState) => state.job);
  const dispatch = useDispatch();

  return (
    <div className="jobs">
      <div className="jobs-header">
        <h2 className="jobs-title">Jobs</h2>
        <div>
          <span className="dropdown">
            <FaFilter />
            <div className="dropdown-content">
              <h4
                onClick={() => {
                  dispatch(filterJobs('Active'));
                }}
              >
                {' '}
                Active{' '}
              </h4>
              <h4
                onClick={() => {
                  dispatch(filterJobs('Scheduled'));
                }}
              >
                {' '}
                Scheduled{' '}
              </h4>
              <h4
                onClick={() => {
                  dispatch(filterJobs('Invoicing'));
                }}
              >
                {' '}
                Invoicing{' '}
              </h4>
              <h4
                onClick={() => {
                  dispatch(filterJobs('To Price'));
                }}
              >
                {' '}
                To Price{' '}
              </h4>
              <h4
                onClick={() => {
                  dispatch(filterJobs('Completed'));
                }}
              >
                {' '}
                Completed{' '}
              </h4>
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
                {' '}
                Sort Recent
              </h4>
              <h4
                onClick={() => {
                  dispatch(sortOldest());
                }}
              >
                {' '}
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
