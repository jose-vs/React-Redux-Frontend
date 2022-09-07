import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IJob } from '../../../models';
import { getJob } from '../../../utils/jobsService';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';

interface JobPageProps {
  job: IJob;
}

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<IJob>(getJob(parseInt(id ? id : '0')));
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="job">
      <div className="job-header">
        <h3>
          <ArrowLeft onClick={handleBackClick} />
          <span>{job.client.name}</span>
        </h3>
        <div className="dropdown">
          <span className="dropbtn">{job.status}</span>
          <div className="dropdown-content">
            <h4
              onClick={() => {
                setJob((prev) => ({ ...prev, status: 'Active' }));
              }}
            >
              Active
            </h4>
            <h4
              onClick={() => {
                setJob((prev) => ({ ...prev, status: 'Scheduled' }));
              }}
            >
              Scheduled
            </h4>
            <h4
              onClick={() => {
                setJob((prev) => ({ ...prev, status: 'Invoicing' }));
              }}
            >
              Invoicing
            </h4>
            <h4
              onClick={() => {
                setJob((prev) => ({ ...prev, status: 'To Priced' }));
              }}
            >
              To Priced
            </h4>
            <h4
              onClick={() => {
                setJob((prev) => ({ ...prev, status: 'Completed' }));
              }}
            >
              Completed
            </h4>
          </div>
        </div>
      </div>

      <div className="job-container">
        <h2>Job No. {job.id}</h2>
        <h3>Date Created: {job.dateCreated.toISOString().slice(0, 10)}</h3>
      </div>
      <div className="job-container">
        <h2>Client: {job.client.name}</h2>
        <div>
          <h3>Email: {job.client.email}</h3>
          <h3>Phone No: {job.client.phoneno}</h3>
        </div>
      </div>

      <b>Notes</b>
      <textarea
        onChange={(e) => {
          setJob((prev) => ({ ...prev, note: e.target.value }));
        }}
        defaultValue={job.note}
      ></textarea>
      <div className="job-container">
        <button>submit</button>
      </div>
    </div>
  );
};

export default JobPage;
