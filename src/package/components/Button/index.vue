<template>
  <div class="r-button"></div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "RButton",
  components: {},
  props:{
    // type:
  },
  setup(props, { root, emit }) {
    const state = reactive({});
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss">
/* @import url() */
.r-button {
  
}
</style>
