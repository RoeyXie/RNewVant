<template>
  <div class="button-view">
    <r-button type="primary" size="large">大号按钮</r-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "ButtonView",
  props: {},
  setup() {
    const state = reactive({});
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.button-view {
}
</style>
