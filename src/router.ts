import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Inventory from './views/Inventory.vue';
// Import the component to the router file
import Register from '@/components/auth/Register.vue';
import Signin from '@/components/auth/Signin.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // Set the path and component in router
    routes: [
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Signin',
            component: Signin
        }
    ]
});
