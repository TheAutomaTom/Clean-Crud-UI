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

// Icons...
import xiconComponents from "./App/Views/_Components/xicon-components";
xiconComponents.forEach((c) => {
  return _app.component(c.name, c.component);
});



_app.mount("#app");
