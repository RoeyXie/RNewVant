<script lang="tsx">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  name: "RStepper",
  props: {},
  setup(props, { attrs, emit, slots }) {
    const state = reactive({});
    return { ...toRefs(state) };
  },
  render() {
    return <div class="r-stepper">步进器</div>;
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-stepper {
}
</style>
