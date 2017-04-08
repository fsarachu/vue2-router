import Header from './components/Header.vue';
import Home from './components/Home.vue';

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'), 'group-user');
    });
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'), 'group-user');
    });
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'), 'group-user');
    });
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'), 'group-user');
    });
};

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