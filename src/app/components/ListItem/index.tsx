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
        <h3>Job No. {id}</h3>
        <h3><span>{client.name}</span> | <span>{status}</span></h3>
        <p>
          <span>Date Created : {dateCreated.toISOString().slice(0,10)}</span>
        </p>
      </div>
    </Link>
  )
}