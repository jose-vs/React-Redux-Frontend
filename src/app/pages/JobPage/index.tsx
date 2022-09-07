import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { IClient, IJob, JobStatusType } from '../../../models';
import { updateJobs } from '../../../models/app-slice/jobSlice';
import { getJob } from '../../../utils/jobsService';
import { IoIosArrowBack } from 'react-icons/io';

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<IJob>(getJob(parseInt(id!)));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(updateJobs(job));
    navigate('/', { replace: true });
  };

  const dropDownItem = (name: JobStatusType) => {
    return (
      <h4
        onClick={() => {
          setJob((prev) => ({ ...prev, status: name }));
        }}
      >
        {name}
      </h4>
    );
  };

  return (
    <div className="job">
      <div className="job-header">
        <h3>
          <IoIosArrowBack onClick={handleButtonClick} />
          <span>{job?.client.name}</span>
        </h3>
        <div className="dropdown">
          <span className="dropbtn">{job?.status}</span>
          <div className="dropdown-content">
            {dropDownItem('Active')}
            {dropDownItem('Scheduled')}
            {dropDownItem('Invoicing')}
            {dropDownItem('To Price')}
            {dropDownItem('Completed')}
          </div>
        </div>
      </div>

      <div className="job-container">
        <h2>Job No. {job?.id}</h2>
        <h3>Date Created: {job?.dateCreated}</h3>
      </div>
      <div className="job-container">
        <h2>Client: {job?.client.name}</h2>
        <div>
          <h3>Email: {job?.client.email}</h3>
          <h3>Phone No: {job?.client.phoneno}</h3>
        </div>
      </div>

      <b>Notes</b>
      <textarea
        onChange={(e) => {
          setJob((prev) => ({ ...prev, note: e.target.value }));
        }}
        defaultValue={job?.note}
      ></textarea>
      <div className="job-container">
        <button onClick={handleButtonClick}>submit</button>
      </div>
    </div>
  );
};

export default JobPage;
