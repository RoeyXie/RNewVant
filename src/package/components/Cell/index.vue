<script lang="tsx">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  name: "RCell",
  props: {},
  setup(props, { attrs, emit, slots }) {
    const state = reactive({});
    return () => {
      return <div class="r-cell"></div>;
    };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-cell {
}
</style>
