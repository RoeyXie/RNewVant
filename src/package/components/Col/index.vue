<script lang="tsx">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
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
    const { attrs, emit, slots } = context
    console.log("context",context)
    const state = reactive({});
    const defaultSlots = slots.default ? slots.default() : "";
    const colClass = () => {
      return [
        "r-col",
        `r-col-${props.span}`,
        props.offset ? `r-col--offset-${props.offset}` : "",
      ];
    };
    return () => {
      const { tag } = props;
      return <tag class={colClass()}>{defaultSlots}</tag>;
    };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-col {
}

@for $i from 1 through 24 {
  .r-col-#{$i} {
    flex: 0 0 $i * (100% / 24);
    max-width: $i * (100% / 24);
  }
  .r-col--offset-#{$i} {
    margin-left: $i * (100% / 24);
  }
}
</style>
