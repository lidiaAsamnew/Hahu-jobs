import newsData from './news.json'

export default defineEventHandler((event) => {
  return newsData
})