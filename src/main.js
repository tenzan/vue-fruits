import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';

Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

new Vue({
    render: h => h(App)
}).$mount('#app');