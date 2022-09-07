import React, { useState } from 'react';
import { DEFAULT_JOBS } from '../../../models/default';
import { ListItem } from '../../components';

const HomePage: React.FC = () => {
  const [jobs, setJobs] = useState(DEFAULT_JOBS);

  return (
    <div className="jobs">
      <div className="jobs-list">
        {jobs.map((job, index) => {
          return <ListItem key={index} job={job} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
