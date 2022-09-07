import React from 'react'
import { Link } from "react-router-dom";
import { IJob } from '../../../models'

interface ListItemProps { 
    job: IJob
}

export const ListItem = (props: ListItemProps) => {
    const {id, status, dateCreated, client} = props.job
  return (
    <Link to={`/job/${id}`}>
        <div className="jobs-list-item">
        <h3>{id}</h3>
        <h3>{client.name}</h3>
        <p>
          <span>{status}</span>
          <span>{dateCreated.getTime()}</span>
        </p>
      </div>
    </Link>
  )
}