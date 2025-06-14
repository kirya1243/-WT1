import http from './http'

export function registerUser(data) {
  return http.post('/registration', data)
}