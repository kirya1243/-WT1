import api from './api'

export const getHomeProducts = () => {
  return api.get('/homeProducts.json')
}
