import api from './api'

export const getProductData = () => {
  return api.get('/product.json')
}
