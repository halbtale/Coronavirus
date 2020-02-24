import Vue from 'vue';
import App from './App.vue';
import visibility from 'vue-visibility-change';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueAnalytics from 'vue-analytics';

Vue.use(visibility);
Vue.use(VueAnalytics, {
    id: 'UA-158983279-1',
    router
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
