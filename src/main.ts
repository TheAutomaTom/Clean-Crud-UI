import "./App/Config/Styles/index.scss";
import App from "./App.vue";

import { createApp } from "vue";
const _app = createApp(App);

import { createPinia } from "pinia";
_app.use(createPinia());

import Router from "./App/Config/Router";
_app.use(Router);

// Controls...
import naiveuiComponents from "./App/Views/Common/naiveui-components";
naiveuiComponents.forEach((c) => {
  _app.use(c.component);
});

import GIcon from "./App/Views/Common/GIcon.vue";
_app.component("g-icon", GIcon);

_app.mount("#app");
