import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import {router} from './routes/router.js'

createApp(App).use(router).use(ElementPlus).mount('#app')
