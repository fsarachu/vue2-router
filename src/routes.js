import User from './components/user/User.vue';
import Home from './components/Home.vue';

export default [
    {
        path: '',
        component: Home
    },
    {
        path: '/user',
        component: User
    }
]