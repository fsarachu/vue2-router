import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export default [
    {
        path: '',
        component: Home,
        name: 'home',
    },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: '',
                component: UserStart,
                name: 'users',
            },
            {
                path: ':id',
                component: UserDetail,
                name: 'userShow',
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            }
        ]
    }
];