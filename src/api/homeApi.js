import http from './http'

// Получить список «featured items» для главной
export function fetchFeaturedItems() {
  return http.get('/home/featured')
}

// Можно добавить и другие запросы для home
export function fetchHomePromo() {
  return http.get('/home/promo')
}
