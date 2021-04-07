<template>
  <div class="button-view">
    <Header text="Button"></Header>
    <div class="demo-section">
      <div
        v-for="(item, index) in demoList"
        :key="index"
        class="demo-button-block"
      >
        <p class="demo-section__title">{{ item.title }}</p>
        <div v-for="(list, i) in item.list" :key="i" class="demo-button-row">
          <r-button v-for="(btn, key) in list" v-bind="btn.attrs" :key="key">{{
            btn.text
          }}</r-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "ButtonView",
  props: {},
  setup() {
    const state = reactive({
      demoList: [
        {
          title: "按钮类型",
          list: [
            [
              {
                attrs: {
                  type: "primary",
                },
                text: "主要按钮",
              },
              {
                attrs: {
                  type: "info",
                },
                text: "信息按钮",
              },
              {
                attrs: {
                  type: "default",
                },
                text: "默认按钮",
              },
            ],
            [
              {
                attrs: {
                  type: "danger",
                },
                text: "警告按钮",
              },
              {
                attrs: {
                  type: "warning",
                },
                text: "危险按钮",
              },
            ],
          ],
        },
        {
          title: "朴素按钮",
          list: [
            [
              {
                attrs: {
                  type: "primary",
                  plain: true,
                },
                text: "朴素按钮",
              },
              {
                attrs: {
                  type: "info",
                  plain: true,
                },
                text: "朴素按钮",
              },
            ],
          ],
        },
        {
          title: "细边框",
          list: [
            [
              {
                attrs: {
                  type: "primary",
                  hairline: true,
                  plain: true,
                },
                text: "朴素按钮",
              },
              {
                attrs: {
                  type: "info",
                  hairline: true,
                  plain: true,
                },
                text: "朴素按钮",
              },
            ],
          ],
        },
        {
          title: "细边框",
          list: [
            [
              {
                attrs: {
                  type: "primary",
                  disabled: true,
                },
                text: "禁用按钮",
              },
              {
                attrs: {
                  type: "info",
                  disabled: true,
                },
                text: "禁用按钮",
              },
            ],
          ],
        },
        {
          title: "加载状态",
          list: [
            [
              {
                attrs: {
                  type: "primary",
                  loading: true,
                },
              },
              {
                attrs: {
                  type: "primary",
                  loading: true,
                  loadingType: "spinner",
                },
              },
              {
                attrs: {
                  type: "info",
                  loading: true,
                  loadingText: "加载中...",
                },
              },
            ],
          ],
        },
        {
          title: "图标按钮",
          list: [
            [
              {
                attrs: {
                  type: "primary",
                  icon: "iconjia",
                },
              },
              {
                attrs: {
                  type: "primary",
                  icon: "iconjia",
                },
                text: "按钮",
              },
              {
                attrs: {
                  type: "info",
                  icon: "iconrenyuanxiaozu",
                },
                text: "按钮",
              },
            ],
          ],
        },
        {
          title: "按钮形状",
          list: [
            [
              {
                attrs: {
                  type: "primary",
                  square: true,
                },
                text: "方形按钮",
              },
              {
                attrs: {
                  type: "info",
                  round: true,
                },
                text: "圆形按钮",
              },
            ],
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
.button-view {
  .demo-button-block {
    padding: 20px;
    .demo-button-row + .demo-button-row {
      margin-top: 20px;
    }
    .r-button + .r-button {
      margin-left: 20px;
    }
  }
}
</style>
