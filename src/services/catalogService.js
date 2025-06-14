import api from './api'

export const getCatalogData = () => {
  return api.get('/catalog.json')
}
