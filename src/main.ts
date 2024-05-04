import "./App/Infra/Styles/index.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./App/Infra/Router/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
