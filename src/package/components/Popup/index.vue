<script lang="tsx">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  toRefs,
  watch,
  CSSProperties,
} from "vue";
let globalZIndex = 2000;
type PositionType = "top" | "right" | "bottom" | "left" | "center";
export default defineComponent({
  name: "r-popup",
  props: {
    // show: Boolean,
    zIndex: [Number, String],
    show: Boolean,
    duration: [Number, String],
    overlay: {
      type: Boolean,
      default: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    overlayStyle: Object as PropType<CSSProperties>,
    position: {
      type: String as PropType<PositionType>,
      default: "center",
    },
    style: Object as PropType<CSSProperties>,
  },
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      zIndex: globalZIndex,
      opened: false,
      popupClass: computed(() => {
        return ["r-popup", `r-popup--${props.position}`];
      }),
      popupStyle: computed(() => {
        const style: CSSProperties = {
          ...(props.style || {}),
        };
        style.zIndex = state.zIndex;
        return style;
      }),
    });
    const open = () => {
      if (!state.opened) {
        if (props.zIndex !== undefined) {
          globalZIndex = +props.zIndex;
        }
        state.opened = true;
        state.zIndex = ++globalZIndex;
      }
    };
    const close = () => {
      if (state.opened) {
        state.opened = false;
        emit("update:show", false);
      }
    };
    watch(
      () => props.show,
      (value) => {
        if (value) {
          open();
        }
      }
    );

    const onClickCloseIcon = (event: MouseEvent) => {
      emit("click-close-icon", event);
      close();
    };

    const onClickOverlay = (event: MouseEvent) => {
      emit("click-overlay", event);

      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const overLayDom = () => {
      if (props.overlay) {
        return (
          <r-overlay
            show={props.show}
            zIndex={state.zIndex}
            duration={props.duration}
            customStyle={props.overlayStyle}
            onClick={onClickOverlay}
          />
        );
      }
    };
    const popupDom = () => {
      return (
        <div
          v-show={props.show}
          class={state.popupClass}
          style={state.popupStyle}
        >
          {slots.default?.()}
        </div>
      );
    };
    return { ...toRefs(state), overLayDom, popupDom };
  },
  render() {
    const { popupDom, overLayDom } = this;
    return (
      <div>
        {overLayDom()}
        {popupDom()}
      </div>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-popup {
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  background-color: #fff;
  transition: transform 0.3s;
  padding: 30px 50px;
}

.r-popup--center {
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.r-popup--top {
  top: 0;
  left: 0;
  width: 100%;
}

.r-popup--bottom {
  bottom: 0;
  left: 0;
  width: 100%;
}

.r-popup--left {
  top: 0;
  left: 0;
  height: 100%;
}

.r-popup--right {
  top: 0;
  right: 0;
  height: 100%;
}
</style>
