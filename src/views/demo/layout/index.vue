<template>
  <div class="layoutView"></div>
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
}
</style>
