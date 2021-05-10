<script lang="tsx">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
  inject,
} from "vue";

export default defineComponent({
  name: "r-col",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      type: [String, Number],
      default: 24,
    },
    offset: [String, Number],
  },
  setup(props, context) {
    const { attrs, emit, slots } = context;
    const state = reactive({
      show: false,
    });
    const internalInstance = getCurrentInstance(); // works
    // eslint-disable-next-line @typescript-eslint/ban-types
    let onRefresh = inject<Function>("foo");
    if (onRefresh) onRefresh(internalInstance?.proxy);
    let gutter = internalInstance?.parent?.props?.gutter || 0;
    gutter = +(gutter as string);
    const styleFn = () => {
      return { padding: "0 " + (gutter as number) / 2 + "px" };
    };
    return { ...toRefs(state), styleFn };
  },
  render() {
    const { tag, $slots, span, offset, styleFn } = this;
    const defaultSlots = ()=>{
      return $slots.default ? $slots.default() : "";
    }
    const colClass = () => {
      return [
        "r-col",
        `r-col-${span}`,
        offset ? `r-col--offset-${offset}` : "",
      ];
    };
    return (
      <tag class={colClass()} style={styleFn()}>
        {defaultSlots()}
      </tag>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-col {
  float: left;
  &:first-of-type {
    padding-left: 0 !important;
  }
  &:last-of-type {
    padding-right: 0 !important;
  }
}

@for $i from 1 through 24 {
  .r-col-#{$i} {
    flex: 0 0 $i * (100% / 24);
    width: $i * (100% / 24);
  }
  .r-col--offset-#{$i} {
    margin-left: $i * (100% / 24);
  }
}
</style>
