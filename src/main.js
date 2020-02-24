import Vue from 'vue';
import App from './App.vue';
import visibility from 'vue-visibility-change';
import './registerServiceWorker';
import router from './router'
import store from './store'

Vue.use(visibility);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
