import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

var config = {
  apiKey: "AIzaSyD42Ef81cbTqi_S8Kd3jofG18j39M21Qck",
  authDomain: "pagespeed-vss.firebaseapp.com",
  databaseURL: "https://pagespeed-vss.firebaseio.com",
  projectId: "pagespeed-vss",
  storageBucket: "pagespeed-vss.appspot.com",
  messagingSenderId: "311458608329"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
