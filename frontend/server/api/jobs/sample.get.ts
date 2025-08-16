import jobsData from '../jobs.json'; 

export default defineEventHandler(() => {

  return jobsData.slice(0, 4);
});