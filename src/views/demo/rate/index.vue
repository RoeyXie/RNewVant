<template>
  <div class="rateview">
    <r-rate></r-rate>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Rateview",
  props: {},
  setup(props, { attrs, emit, slots }) {
    const state = reactive({});
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.rateview {
}
</style>
