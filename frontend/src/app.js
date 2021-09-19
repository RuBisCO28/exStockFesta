import Vue from "vue";
import Header from "./components/molecules/Header.vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(Header),
  }).$mount('#header-app');
});
