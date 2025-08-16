import jobsData from './jobs.json';

export default defineEventHandler(event => {
  const query = getQuery(event);
  const sectorId = query.sid as string;

  if (sectorId) {
 
    return jobsData.filter(job => job.category === sectorId);
  }


  return jobsData;
});