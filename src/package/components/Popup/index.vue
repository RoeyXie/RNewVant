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

export default defineComponent({
  name: "r-popup",
  props: {
    // show: Boolean,
    zIndex: [Number, String],
    show: Boolean,
    duration: [Number, String],
    overlayStyle: Object as PropType<CSSProperties>,
    overlay: {
      type: Boolean,
      defalut: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      defalut: true,
    },
  },
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      zIndex: globalZIndex,
      opened: false,
      popupClass: computed(() => {
        return ["r-popup"];
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
    return { ...toRefs(state), overLayDom };
  },
  render() {
    const { popupClass, overLayDom } = this;
    return (
      <div>
        <div class={popupClass}></div>
        {overLayDom()}
      </div>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-popup {
}
</style>
