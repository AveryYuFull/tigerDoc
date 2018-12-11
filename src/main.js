// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import { envFactory } from './commons/envService/EnvService';
import { httpFactory } from './commons/httpClient/httpClient';

import 'style/index.scss';

Vue.config.productionTip = false;

let $env = envFactory(); // 环境变量
let $http = httpFactory({}, $env);

Vue.prototype.$http = $http;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
