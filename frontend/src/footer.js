import Vue from "vue";
import Footer from "./components/molecules/Footer.vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(Footer),
  }).$mount('#footer-app');
});
