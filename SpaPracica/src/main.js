import { createApp } from 'vue'
import '@/styles/style.scss'
import App from '@/App.vue'

/** @module router - Навигация */
import router from '@/router/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
