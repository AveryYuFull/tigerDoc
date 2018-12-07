import Vue from 'vue';
import Router from 'vue-router';
import DcHome from '@/pages/home/home';
import DcDocument from '@/pages/document/Document';

import routerMap from './routes';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: DcHome,
            children: [{
                path: '/',
                redirect: routerMap[0].path,
                component: DcDocument,
                children: routerMap
            }]
        }
    ]
});
