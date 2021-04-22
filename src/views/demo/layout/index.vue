<template>
  <div class="layoutView height-100-per">
    <Header text="Layout"></Header>
    <div class="demo-section p-l-20 p-r-20">
      <div
        v-for="(list, index) in demoList"
        :key="index"
        class="demo-button-block"
      >
        <p class="demo-section-block__title">{{ list.title }}</p>
        <r-row
          v-for="(row, rowKey) in list.row"
          v-bind="row.attrs"
          :key="rowKey"
        >
          <r-col
            v-for="(col, colKey) in row.col"
            v-bind="col.attrs"
            :key="colKey"
            >{{ col.text }}</r-col
          >
        </r-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "LayoutView",
  props: {},
  setup() {
    const state = reactive({
      demoList: [
        {
          title: "基础用法",
          row: [
            {
              attrs: {},
              col: [
                {
                  attrs: {
                    span: "8",
                  },
                  text: "span: 8",
                },
                {
                  attrs: {
                    span: "8",
                  },
                  text: "span: 8",
                },
                {
                  attrs: {
                    span: "8",
                  },
                  text: "span: 8",
                },
              ],
            },
            {
              attrs: {},
              col: [
                {
                  attrs: {
                    span: "12",
                    offset: "12",
                  },
                  text: "offset: 12, span: 12",
                },
              ],
            },
            {
              attrs: {},
              col: [
                {
                  attrs: {
                    span: "4",
                  },
                  text: "span: 4",
                },
                {
                  attrs: {
                    span: "10",
                    offset: "4",
                  },
                  text: "offset: 4, span: 10",
                },
              ],
            },
          ],
        },
        {
          title: "在列元素之间增加间距",
          row: [
            {
              attrs: {
                gutter: "20",
              },
              col: [
                {
                  attrs: {
                    span: "8",
                  },
                  text: "span: 8",
                },
                {
                  attrs: {
                    span: "8",
                  },
                  text: "span: 8",
                },
                {
                  attrs: {
                    span: "8",
                  },
                  text: "span: 8",
                },
              ],
            },
          ],
        },
        {
          title: "Flex 布局",
          row: [
            {
              attrs: {
                flex: true,
              },
              col: [
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
              ],
            },
            {
              attrs: {
                flex: true,
                justify: "center",
              },
              col: [
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
              ],
            },
            {
              attrs: {
                flex: true,
                justify: "end",
              },
              col: [
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
              ],
            },
            {
              attrs: {
                flex: true,
                justify: "space-between",
              },
              col: [
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
              ],
            },
            {
              attrs: {
                flex: true,
                justify: "space-around",
              },
              col: [
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
                },
                {
                  attrs: {
                    span: "6",
                  },
                  text: "span: 6",
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
<style lang="scss" scpoed>
/* @import url() */
.layoutView {
  .r-col:nth-child(odd) {
    background-color: #39a9ed;
  }
  .r-col:nth-child(even) {
    background-color: #66c6f2;
  }
  .r-col {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;
  }
}
</style>
