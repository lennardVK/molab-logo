import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import BootstrapVue from "bootstrap-vue";
import firebase from "firebase"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueResource);

Vue.config.productionTip = false;

var firebaseConfig = {
    apiKey: "AIzaSyCJrvujewhYFIWEClK7wlOA70VCwVpI0r8",
    authDomain: "vie-sample.firebaseapp.com",
    databaseURL: "https://vie-sample.firebaseio.com",
    projectId: "vie-sample",
    storageBucket: "vie-sample.appspot.com",
    messagingSenderId: "660105502015",
    appId: "1:660105502015:web:e7f00f1f9f6315146a078a",
    measurementId: "G-RL7HHRLE4B"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");