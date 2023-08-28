
import { createRouter,createWebHashHistory } from "vue-router"
import Root from '../../src/view/root.vue'

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:Root}
    ]
})