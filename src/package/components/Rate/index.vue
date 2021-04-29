<script lang="tsx">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  name: "RRate",
  props: {},
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      value: 3,
    });
    return () => <van-rate v-model={state.value} />;
  },
  // render() {
  //   return <van-rate v-model={this.value} />;
  // },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-rate {
  height: 100px;
  width: 100px;
  background: wheat;
}
</style>
