import Vue from 'vue';
import firebase from 'firebase';
import App from './App';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAXPxcDZqVQv2GY1fvidEm-Pbzxtk-0AWY",
    authDomain: "vue-fruits.firebaseapp.com",
    databaseURL: "https://vue-fruits.firebaseio.com",
    projectId: "vue-fruits",
    storageBucket: "vue-fruits.appspot.com",
    messagingSenderId: "559368703703"
};
firebase.initializeApp(config);

new Vue({
    render: h => h(App)
}).$mount('#app');