import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IJob } from '../../../models';
import { getJob } from '../../../utils/jobsService';

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<IJob>(getJob(parseInt(id ? id : '0')));
  const navigate = useNavigate();

  return (
    <div className="note">
      <div className="note-header">
        <h3>{job.status}</h3>
        <h3>{job.client.name}</h3>
      </div>
      <textarea
        onChange={(e) => {
          setJob((prev) => ({ ...prev, note: e.target.value }));
        }}
        defaultValue={job?.note}
      ></textarea>
    </div>
  );
};

export default JobPage;
