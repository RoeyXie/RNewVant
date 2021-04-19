<script lang="tsx">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  name: "r-row",
  props: {},
  setup(props, { attrs, emit, slots }) {
    const state = reactive({});
    const defaultSlots = slots.default ? slots.default() : "";
    const consolefn = () => {
      console.log("aaaa");
    };
    return () => {
      return <div class="r-row">{defaultSlots}</div>;
    };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-row {
  display: flex;
}
</style>
