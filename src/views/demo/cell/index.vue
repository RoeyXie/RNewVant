<template>
  <div class="cell"></div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "RCell",
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
