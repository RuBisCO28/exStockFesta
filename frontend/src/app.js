// import Vue from "vue";

const component = () => {
  const element = document.getElementById("app");
  element.innerHTML = "Hello webpackkkkk!!!";
  return element;
};

document.body.appendChild(component());

//document.addEventListener("DOMContentLoaded", () => {
//  const templates = document.querySelectorAll("[data-vue]");

//  for (let el of templates) {
    //let app = new Vue(components[el.dataset.vue]);
//    app.$mount(el);
//  }
//});
