import { menuList } from "@/assets/menuList";
import { RouteRecordRaw } from "vue-router";
import router from "@/router";

const addRoutes: RouteRecordRaw[] = [];
function generaMenu(paramsList: MenuItem[]) {
  paramsList.forEach((item) => {
    const menu = {
      path: item.url,
      component: () => import(`@/views/demo${item.url}/index.vue`),
      children: [],
      name: item.name,
      meta: {
        title: item.name,
        id: item.menuId,
      },
    };
    if (item.list && item.list.length > 0) {
      generaMenu(item.list);
    }
    if (item.url) {
      addRoutes.push(menu);
    }
  });
}

generaMenu(menuList);
addRoutes.forEach((route) => {
  router.addRoute(route.name || "", route);
});
