import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
        // redirect to login page if not logged in and trying to access a restricted page
        const publicPages = ['/login'];
        const authRequired = !publicPages.includes(to.path);
        const loggedIn = localStorage.getItem('user');

        if (authRequired && !loggedIn) {
            return next({
                path: '/login',
                query: { returnUrl: to.path }
            });
        }
        next();
    }
);

export default router;
