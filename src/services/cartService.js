import api from './api'

export const getCartData = () => {
  return api.get('/cart.json')
}
