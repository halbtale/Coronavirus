import Vue from 'vue';
import App from './App.vue';
import visibility from 'vue-visibility-change';
import './registerServiceWorker';

Vue.use(visibility);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
