export type JobStatusType = 'scheduled' | 'active' | 'invoicing' | 'to priced' | 'completed';

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
