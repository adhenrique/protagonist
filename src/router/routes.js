export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "login" */ './../view/Home'),
        meta: {
            icon: 'home',
        }
    },
];
