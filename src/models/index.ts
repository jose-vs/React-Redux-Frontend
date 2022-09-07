export type JobStatusType = 'Scheduled' | 'Active' | 'Invoicing' | 'To Price' | 'Completed';

export interface IClient {
  name: string;
  phoneno: number;
  email: string;
}

export interface IJob {
  id: number;
  status: JobStatusType;
  dateCreated: string;
  client: IClient;
  note?: string;
}
