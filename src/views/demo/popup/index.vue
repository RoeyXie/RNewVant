<template>
  <div class="popup-view height-100-per">
    <Header text="Popup"></Header>
    <div class="demo-section p-l-20 p-r-20">
      <div
        v-for="(demo, index) in demoList"
        :key="index"
        class="demo-button-block"
      >
        <p class="demo-section-block__title">{{ demo.title }}</p>
        <div class="demo-section-block__card">
          <r-cell
            v-for="(item, key) in demo.list"
            :key="key"
            is-link
            @click="showPopup(item)"
            >{{ item.cellText }}</r-cell
          >
        </div>
      </div>
    </div>
    <r-popup v-model:show="show" v-bind="attr">{{ popupText }}</r-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "PopUpView",
  props: {},
  setup() {
    const state = reactive({
      demoList: [
        {
          title: "基础用法",
          list: [
            {
              key: "basic",
              cellText: "展示弹出层",
              popupText: "内容",
              attr: {
                style: {
                  padding: "30px 50px",
                },
              },
            },
          ],
        },
        {
          title: "弹出位置",
          list: [
            {
              key: "top",
              cellText: "顶部弹出",
              attr: {
                position: "top",
                style: { height: "30%" },
              },
            },
            {
              key: "bottom",
              cellText: "底部弹出",
              attr: {
                position: "bottom",
                style: { height: "30%" },
              },
            },
            {
              key: "left",
              cellText: "左侧弹出",
              attr: {
                position: "left",
                style: { width: "30%" },
              },
            },
            {
              key: "right",
              cellText: "右侧弹出",
              attr: {
                position: "right",
                style: { width: "30%" },
              },
            },
          ],
        },
        {
          title: "关闭图标",
          list: [
            {
              key: "close",
              cellText: "关闭图标",
              attr: {
                position: "bottom",
                style: { height: "30%" },
                closeable: true,
              },
            },
            {
              key: "closeIcon",
              cellText: "自定义图标",
              attr: {
                position: "bottom",
                style: { height: "30%" },
                closeable: true,
                closeIcon: "iconguanbicircle",
              },
            },
            {
              key: "closePosition",
              cellText: "图标位置",
              attr: {
                position: "bottom",
                style: { height: "30%" },
                closeable: true,
                closeIconPosition: "top-left",
              },
            },
          ],
        },
      ],
      show: false,
      attr: {},
      popupText: "",
    });
    const showPopup = (e: any) => {
      // console.log("e", e);
      const { attr, popupText } = e;
      state.attr = attr;
      state.popupText = popupText;
      state.show = true;
    };
    return {
      ...toRefs(state),
      showPopup,
    };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.popup-view {
}
</style>
