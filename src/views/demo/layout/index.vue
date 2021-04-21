<template>
  <div class="layoutView">
    <Header text="Layout"></Header>
    <div class="demo-section">
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
    
    <r-row>
      <r-col offset="12" span="12">offset: 12, span: 12</r-col>
    </r-row>

    <r-row gutter="20">
      <r-col span="8">span: 8</r-col>
      <r-col span="8">span: 8</r-col>
      <r-col span="8">span: 8</r-col>
    </r-row>

    <r-row flex>
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
    </r-row>

    <!-- 居中 -->
    <r-row flex justify="center">
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
    </r-row>

    <!-- 右对齐 -->
    <r-row flex justify="end">
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
    </r-row>

    <!-- 两端对齐 -->
    <r-row flex justify="space-between">
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
    </r-row>

    <!-- 每个元素的两侧间隔相等 -->
    <r-row flex justify="space-around">
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
      <r-col span="6">span: 6</r-col>
    </r-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
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
          ],
        },
        {
          title: "在列元素之间增加间距",
          row: [
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
