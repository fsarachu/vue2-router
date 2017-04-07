import Header from './components/Header.vue';
import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export default [
    {
        path: '',
        components: {
            'default': Home,
            'header-top': Header,
        },
        name: 'home',
    },
    {
        path: '/user',
        components: {
            'default': User,
            'header-top': Header,
        },
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
    },
    {
        path: '/redirect-me',
        redirect: {
            name: 'users'
        }
    },
    {
        path: '*',
        redirect: {
            name: 'home'
        }
    }
];