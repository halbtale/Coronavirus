import Vue from 'vue';
import App from './App.vue';
import visibility from 'vue-visibility-change';
import './registerServiceWorker';
import router from './router'

Vue.use(visibility);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
