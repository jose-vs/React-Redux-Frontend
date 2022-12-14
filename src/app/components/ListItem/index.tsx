import React from 'react';
import { Link } from 'react-router-dom';
import { IJob } from '../../../models';

interface ListItemProps {
  job: IJob;
}

export const ListItem = ({ job }: ListItemProps) => {
  const { id, status, dateCreated, client } = job;
  return (
    <Link to={`/job/${id}`}>
      <div data-testid="list-item" className="jobs-list-item">
        <h3>Job No. {id}</h3>
        <h3>
          <span>{client.name}</span> | <span>{status}</span>
        </h3>
        <p>
          <span>Date Created: {dateCreated}</span>
        </p>
      </div>
    </Link>
  );
};
