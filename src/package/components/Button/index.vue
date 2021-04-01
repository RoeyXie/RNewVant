<script lang="tsx">
import { defineComponent, reactive, onMounted, PropType, computed } from "vue";
type ButtonType = "default" | "primary" | "info" | "warning" | "danger";
type ButtonSize = "large" | "normal" | "small" | "mini";
export default defineComponent({
  name: "RButton",
  components: {},
  props: {
    plain: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loading: Boolean,
    loadingText: String,
    square: Boolean,
    round: Boolean,
    icon: String,
    block: Boolean,
    color: String,
    type: {
      type: String as PropType<ButtonType>,
      default: "default",
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "normal",
    },
    iconPosition: String as PropType<"left" | "right">,
  },
  setup(props, { attrs, emit, slots }) {
    console.log("slots",slots)
    const state = reactive({
      btnClass: computed(() => {
        return [
          "r-button",
          `r-button--${props.type}`,
          `r-button--${props.size}`,
        ];
      }),
    });
    return () => {
      return <div class={state.btnClass}>{slots.default}</div>;
    };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 44px;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
}
</style>