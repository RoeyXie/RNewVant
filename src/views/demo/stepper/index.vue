<template>
  <div class="stepperview">
    <r-cell title="基础用法">
      <r-stepper v-model="value" />
    </r-cell>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  name: "Stepperview",
  props: {},
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      value: 12,
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.stepperview {
}
</style>
