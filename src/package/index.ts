import { App } from "vue";
// 图标字体
import "./font/iconfont.css";
// 公共样式
import "./styles/index.scss";
// 组件
import Icon from "./components/Icon/index.vue";
import Button from "./components/Button/index.vue";

interface componentInstall {
  install: (Vue: App) => void;
}

const RVantComponents: componentInstall = {
  install: (Vue: App) => {
    Vue.component(Icon.name, Icon);
    Vue.component(Button.name, Button);
  },
};
// 注册自定义组件
export default RVantComponents;
