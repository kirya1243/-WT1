// /src/plugins/axios.js
import axios from 'axios';

export const apiClient = axios.create({
  // Если вы настроили proxy в Vite (см. ниже), baseURL = '/api'
  // Иначе укажите полный путь: 'http://localhost:3000/api'
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});
