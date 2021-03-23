import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import publicComponents from "@/components/index.ts";
const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Vant)
  .use(publicComponents)
  .mount("#app");
