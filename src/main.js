// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './styles/main.scss'

import { createPinia } from 'pinia'
import router from './router'

// 1. Сначала создаём приложение
const app = createApp(App)

// 2. Подключаем Pinia и Router
const pinia = createPinia()
app.use(pinia)
app.use(router)

// 3. Монтируем приложение
app.mount('#app')
