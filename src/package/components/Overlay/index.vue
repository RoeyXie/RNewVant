<script lang="tsx">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  PropType,
  CSSProperties,
} from "vue";
export default defineComponent({
  name: "ROverlay",
  props: {
    show: Boolean,
    className: (null as unknown) as PropType<unknown>,
    zIndex: [String, Number],
    duration: [Number, String],
    customStyle: Object as PropType<CSSProperties>,
  },
  setup(props, { emit, slots }) {
    const state = reactive({
      overlayClass: computed(() => {
        return ["r-overlay", props.className];
      }),
    });
    const clickHandler = (e: MouseEvent) => {
      emit("click", e);
    };
    const slotDefault = slots.default ? slots.default() : "";
    return { ...toRefs(state), ...toRefs(props), clickHandler, slotDefault };
  },
  render() {
    const {
      show,
      zIndex,
      duration,
      overlayClass,
      customStyle,
      clickHandler,
      slotDefault,
    } = this;
    const style: CSSProperties = {
      ...customStyle,
    };
    if (zIndex !== undefined) {
      style.zIndex = +zIndex;
    }
    style.animationDuration = `${duration || 0.3}s`;
    return (
      <div
        v-show={show}
        class={overlayClass}
        style={style}
        onClick={clickHandler}
      >
        {slotDefault}
      </div>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
