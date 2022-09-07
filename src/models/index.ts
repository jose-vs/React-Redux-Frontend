export type JobStatusType = 'Scheduled' | 'Active' | 'Invoicing' | 'To Priced' | 'Completed';

export interface IClient {
  name: string;
  phoneno: number;
  email: string;
}

export interface IJob {
  id: number;
  status: JobStatusType;
  dateCreated: Date;
  client: IClient;
  note?: string;
}
