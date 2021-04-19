<template>
  <div class="cell height-100-per">
    <Header text="Cell"></Header>
    <div class="demo-section">
      <div v-for="(item, index) in demoList" :key="index">
        <p class="demo-section__title">{{ item.title }}</p>
        <r-cell-group
          v-for="(list, i) in item.list"
          :key="i"
          :title="list.title"
          class="demo-button-row"
        >
          <r-cell
            v-for="(cell, key) in list.attr"
            v-bind="cell"
            :key="key"
          ></r-cell>
        </r-cell-group>
      </div>

      <p class="demo-section__title">使用插槽</p>

      <r-cell value="内容" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">单元格</span>
          <van-tag type="danger">标签</van-tag>
        </template>
      </r-cell>

      <r-cell title="单元格" icon="iconshangdian">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="search" class="search-icon" />
        </template>
      </r-cell>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "CellView",
  components: {},
  setup() {
    const state = reactive({
      demoList: [
        {
          title: "基础用法",
          list: [
            {
              attr: [
                {
                  title: "单元格",
                  value: "内容",
                },
                {
                  title: "单元格",
                  value: "内容",
                  label: "描述信息",
                },
              ],
            },
          ],
        },
        {
          title: "单元格大小",
          list: [
            {
              attr: [
                {
                  title: "单元格",
                  value: "内容",
                  size: "large",
                },
                {
                  title: "单元格",
                  value: "内容",
                  label: "描述信息",
                  size: "large",
                },
              ],
            },
          ],
        },
        {
          title: "展示图标",
          list: [
            {
              attr: [
                {
                  title: "单元格",
                  value: "内容",
                  icon: "icondingwei",
                },
              ],
            },
          ],
        },
        {
          title: "只设置 value",
          list: [
            {
              attr: [
                {
                  value: "内容",
                },
              ],
            },
          ],
        },
        {
          title: "基础用法",
          list: [
            {
              attr: [
                {
                  title: "单元格",
                  isLink: true,
                },
                {
                  title: "单元格",
                  value: "内容",
                  isLink: true,
                },
                {
                  title: "单元格",
                  value: "内容",
                  isLink: true,
                  arrowDirection: "down",
                },
              ],
            },
          ],
        },
        {
          title: "分组标题",
          list: [
            {
              title: "分组1",
              attr: [
                {
                  title: "单元格",
                  value: "内容",
                },
              ],
            },
            {
              title: "分组2",
              attr: [
                {
                  title: "单元格",
                  value: "内容",
                },
              ],
            },
          ],
        },
        {
          title: "垂直居中",
          list: [
            {
              attr: [
                {
                  title: "单元格",
                  value: "内容",
                  label: "描述信息",
                  center: true,
                },
              ],
            },
          ],
        },
      ],
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss">
/* @import url() */
.cell {
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
