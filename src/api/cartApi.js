import http from './http'

export function fetchCart() {
  return http.get('/cart')
}

export function addToCart(productId, qty = 1) {
  return http.post('/cart/add', { productId, qty })
}

export function updateCartItem(productId, qty) {
  return http.post('/cart/update', { productId, qty })
}

export function removeCartItem(productId) {
  return http.post('/cart/remove', { productId })
}
