import Vue from 'vue';
import Router from 'vue-router';
import DcHome from '@/pages/home/home';
import DcDocument from '@/pages/document/Document';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: DcHome,
            children: [{
                path: '/',
                component: DcDocument
            }]
        }
    ]
});
