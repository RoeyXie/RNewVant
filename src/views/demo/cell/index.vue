<template>
  <div class="cell">
    <r-cell-group>
      <r-cell title="单元格" value="内容" />
      <r-cell title="单元格" value="内容" label="描述信息" />
    </r-cell-group>
    <r-cell-group>
      <r-cell title="单元格" value="内容" size="large" />
      <r-cell title="单元格" value="内容" size="large" label="描述信息" />
    </r-cell-group>
    <r-cell title="单元格" icon="icondingwei" value="内容" />
    <r-cell value="内容" />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "CellView",
  components: {},
  setup() {
    const state = reactive({});
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss">
/* @import url() */
.cell {
}
</style>
