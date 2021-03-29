<template>
  <div class="icon-view">
    <RIcon name="iconqipao"></RIcon>
    <RIcon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"></RIcon>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "IconView",
  components: {},
  setup(props, { root, emit }) {
    const state = reactive({
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss">
/* @import url() */
.icon-view {
}
</style>
