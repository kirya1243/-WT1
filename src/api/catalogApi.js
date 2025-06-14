import http from './http'

// Получить список категорий
export function fetchCategories() {
  return http.get('/catalog/categories')
}

// Получить товары по фильтрам / странице
export function fetchProducts({ page = 1, category, size, priceRange }) {
  return http.get('/catalog/products', {
    params: { page, category, size, priceRange }
  })
}
