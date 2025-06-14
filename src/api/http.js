import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Перехватчик запросов: можно, например, добавить токен
http.interceptors.request.use(config => {
  // const token = localStorage.getItem('authToken')
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Перехватчик ответов: централизованная обработка ошибок
http.interceptors.response.use(
  response => response.data,
  error => {
    // Здесь можно логировать, показывать уведомления и т.д.
    console.error('API Error:', error.response?.status, error.message)
    return Promise.reject(error)
  }
)

export default http
