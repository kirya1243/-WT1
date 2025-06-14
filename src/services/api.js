import axios from 'axios'

const api = axios.create({
  baseURL: '/src/data',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
