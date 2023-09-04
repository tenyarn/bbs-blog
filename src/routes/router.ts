
import { createRouter,createWebHashHistory } from "vue-router"
import Root from '../../src/view/root.vue'
import Test from '../view/test.vue'
export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/root',component:Root},
        {path:'/test',component:Test}
    ]
})