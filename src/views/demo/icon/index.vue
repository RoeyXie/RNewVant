<template>
  <div class="icon-view height-100-per">
    <Header text="Icon"></Header>
    <div class="demo-section">
      <div class="demo-section__content">
        <div v-for="(item, index) in demoList" :key="index">
          <p class="demo-section__title">{{ item.title }}</p>
          <div class="flex-start demo-section__iconbox">
            <RIcon v-for="(v, k) in item.list" :key="k" v-bind="v"> </RIcon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "IconView",
  components: {},
  setup() {
    const state = reactive({
      demoList: [
        {
          title: "Basic Usage",
          list: [
            {
              name: "iconqipao",
            },
            {
              name: "https://b.yzcdn.cn/vant/icon-demo-1126.png",
            },
          ],
        },
        {
          title: "Show Badge",
          list: [
            {
              name: "iconqipao",
              dot: true,
            },
            {
              name: "iconqipao",
              badge: "9",
            },
            {
              name: "iconqipao",
              badge: "99+",
            },
          ],
        },
        {
          title: "Icon Color",
          list: [
            {
              name: "icongouwuche",
              color: "#1989fa",
            },
            {
              name: "iconhuo",
              color: "#ee0a24",
            },
          ],
        },
        {
          title: "Icon Size",
          list: [
            {
              name: "iconqipao",
              size: 24,
            },
            {
              name: "iconqipao",
              size: "3rem",
            },
          ],
        },
      ],
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scoped>
/* @import url() */
.icon-view {
  .r-icon + .r-icon {
    margin-left: 20px;
  }
}
</style>
