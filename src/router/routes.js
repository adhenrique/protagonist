export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "login" */ './../view/Home'),
        meta: {
            icon: 'home',
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ './../view/Login'),
        meta: {
            icon: 'home',
        }
    },
];
