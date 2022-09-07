import { getJob } from '../jobsService';
import {store} from '../../models/root-store/root-store'
import { JobStatusType } from '../../models';

test('get job no.1 from mock data', () => {
    let state = store.getState().job
    const job = state.find((job) => job.id === 1); 
    expect(job?.id).toBe(1)
    expect(job?.client.name).toBe('Jose Santos')
    expect(job?.status).toBe('Invoicing' as JobStatusType)
});
