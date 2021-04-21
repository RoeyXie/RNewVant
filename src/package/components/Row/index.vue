<script lang="tsx">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  provide,
  PropType,
} from "vue";
import Col from "./Col/index.vue";

type FlexType = "center" | "end" | "space-between" | "space-around";
export default defineComponent({
  name: "r-row",
  props: {
    gutter: {
      type: [String, Number],
    },
    flex: {
      type: Boolean,
      default: false,
    },
    justify: String as PropType<FlexType>,
  },
  setup(props) {
    const state = reactive({
      test: [] as InstanceType<typeof Col>[],
    });
    const func = (i: InstanceType<typeof Col>) => {
      state.test.push(i);
    };
    provide("foo", func);
    onMounted(() => {
      state.test.forEach((item) => {
        item.show = true;
      });
    });
    const rowClass = () => {
      return [
        "r-row",
        props.flex ? "r-row-flex" : "",
        props.justify ? `r-row-flex-${props.justify}` : "",
      ];
    };
    return { ...toRefs(state), ...toRefs(props), rowClass };
  },
  render() {
    const { $slots, rowClass } = this;
    // const
    const defaultSlots = $slots.default ? $slots.default() : "";
    return <div class={rowClass()}>{defaultSlots}</div>;
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-row {
  &::after {
    display: table;
    clear: both;
    content: "";
  }
}

.r-row-flex {
  display: flex;
  &::after {
    display: none;
  }
}

.r-row-flex-end {
  justify-content: flex-end;
}

.r-row-flex-center {
  justify-content: center;
}

.r-row-flex-space-between {
  justify-content: space-between;
}

.r-row-flex-space-around {
  justify-content: space-around;
}
</style>
