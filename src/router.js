import VueRouter from 'vue-router';
import Vue from 'vue';
import Home from "@/view/mainpage/index"
Vue.use(VueRouter)
export default VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        }
    ],
})