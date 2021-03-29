import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "@/styles/index.scss"; // 初始化样式
import publicComponents from "@/components/index.ts"; // 初始化公共组件
import RVantComponents from "@/package/index.ts"; // 初始化公共组件

import "@/initialMenu.ts";
const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Vant)
  .use(publicComponents)
  .use(RVantComponents)
  .mount("#app");
