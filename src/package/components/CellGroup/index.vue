<script lang="tsx">
import { defineComponent, reactive, computed } from "vue";
export default defineComponent({
  name: "RCellGroup",
  props: {
    title: [Number, String],
    border: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const state = reactive({
      cellGroupClass: computed(() => {
        return ["r-cell-group", props.border ? "r-hairline--top-bottom" : ""];
      }),
    });
    const defaultSlot = slots.default ? slots.default() : null;
    const titleDom = props.title ? (
      <h1 class="r-cell-group__title">{props.title}</h1>
    ) : null;
    return () => (
      <div>
        {titleDom}
        <div class={state.cellGroupClass}>{defaultSlot}</div>
      </div>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-cell-group {
  position: relative;
  &__title {
    padding: 16px 16px 8px;
    color: #969799;
    font-size: 14px;
    line-height: 16px;
  }
}

.r-cell-group-border {
}
</style>