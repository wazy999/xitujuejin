import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:resolve => require(['./view/mainpage/index.vue'],resolve),
        }
    ],
})