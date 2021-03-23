import { App } from "vue";

const requireComponents: __WebpackModuleApi.RequireContext = require.context(
  "./public/",
  true,
  /\.vue/
); // 批量 require 组件
interface componentInstall {
  install: (Vue: App) => void;
}

const publicComponents: componentInstall = {
  install: (Vue: App) => {
    requireComponents.keys().forEach((fileName) => {
      // 循环获取组件信息
      // 组件实例
      const reqCom = requireComponents(fileName);
      const defaultName = fileName.slice(2, fileName.length - 4);
      // 组件挂载
      Vue.component(
        reqCom.default.name || defaultName,
        reqCom.default || reqCom
      ); // reqCom.default.name为组件内部的name属性，当未命名时自动默认用文件名称作为组件名
    });
  },
};
// 注册自定义组件
export default publicComponents;
