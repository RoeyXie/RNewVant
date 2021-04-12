<script lang="tsx">
import { defineComponent, reactive, toRefs, onMounted, computed } from "vue";
export default defineComponent({
  name: "RCellGroup",
  props: {
    title: [Number, String],
    border: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      cellGroupClass: computed(() => {
        return ["r-cell-group", props.border ? "r-cell-group-border" : ""];
      }),
    });
    const defaultSlot = slots.default ? slots.default() : null;
    return () => (
      <div class={state.cellGroupClass}>
        <h1 class="r-cell-group__title">{props.title}</h1>
        {defaultSlot}
      </div>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-cell-group {
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