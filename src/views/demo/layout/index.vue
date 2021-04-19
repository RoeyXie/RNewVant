<template>
  <div class="layoutView">
    <r-row>
      <r-col span="8">span: 8</r-col>
      <r-col span="8">span: 8</r-col>
      <r-col span="8">span: 8</r-col>
    </r-row>

    <r-row>
      <r-col span="4">span: 4</r-col>
      <r-col span="10" offset="4">offset: 4, span: 10</r-col>
    </r-row>

    <r-row>
      <r-col offset="12" span="12">offset: 12, span: 12</r-col>
    </r-row>

    <van-row gutter="20">
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  name: "LayoutView",
  props: {},
  setup(props, { attrs, emit, slots }) {
    const state = reactive({});
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
