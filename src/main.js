import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from  'element-plus'
import 'element-plus/theme-chalk/index.css'
import axios from './axios/config';

const  app=createApp(App)
  app.use(ElementPlus)
app.config.globalProperties.$axios = axios
    app.use(router).mount('#app')
