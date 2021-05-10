<template>
  <div class="stepperview">
    <r-cell title="基础用法">
      <r-stepper v-model="value1" />
    </r-cell>
    <r-cell title="步长设置">
      <r-stepper v-model="value2" step="2" />
    </r-cell>
    <r-cell title="限制输入范围">
      <r-stepper v-model="value3" :min="5" :max="8" />
    </r-cell>
    <r-cell title="限制输入整数">
      <r-stepper v-model="value4" integer />
    </r-cell>
    <r-cell title="禁用状态">
      <r-stepper v-model="value4" disabled />
    </r-cell>
    <r-cell title="禁用输入框">
      <r-stepper v-model="value4" disable-input />
    </r-cell>
    <r-cell title="固定小数位数">
      <r-stepper v-model="value5" step="0.2" :decimal-length="1" />
    </r-cell>
    <r-cell title="固定小数位数">
      <r-stepper v-model="value" input-width="100px" />
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
      value: 1.2,
      value1: 1.2,
      value2: 1.2,
      value3: 1.2,
      value4: 1.2,
      value5: 1.2,
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
