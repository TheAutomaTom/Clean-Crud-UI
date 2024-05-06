import "./App/Infra/Styles/index.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./App/Infra/Router/router";

const _app = createApp(App);

_app.use(createPinia());
_app.use(router);

// Controls...
import naiveuiComponents from "./App/Views/_Components/naiveui-components";
naiveuiComponents.forEach((c) => {
  _app.use(c.component);
});

import GIcon from "./App/Views/_Components/GIcon.vue";
_app.component("g-icon", GIcon);

_app.mount("#app");
