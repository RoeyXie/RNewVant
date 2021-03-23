interface MenuItem {
  menuId: number;
  parentId: number;
  name: string;
  url: string;
  list: Array<MenuItem> | Array<Criminal>;
}
