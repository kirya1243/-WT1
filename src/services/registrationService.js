import api from './api'

export const getRegistrationData = () => {
  return api.get('/registration.json')
}
