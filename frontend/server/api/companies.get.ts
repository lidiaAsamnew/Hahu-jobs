import companiesData from './companies.json'

export default defineEventHandler((event) => {
  return companiesData
})