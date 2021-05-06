<script lang="tsx">
/* eslint-disable no-undef */
import { defineComponent, reactive, toRefs, computed } from "vue";
type RateStatus = "full" | "half" | "void";
function getRateStatus(
  value: number,
  index: number,
  allowHalf: boolean
): RateStatus {
  if (value >= index) {
    return "full";
  }
  if (value + 0.5 >= index && allowHalf) {
    return "half";
  }
  return "void";
}

export default defineComponent({
  name: "RRate",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 5,
    },
    allowHalf: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "iconyduixingxingshixin",
    },
    voidIcon: {
      type: String,
      default: "iconyduixingxingkongxin",
    },
    color: String,
    voidColor: String,
    disabledColor: String,
  },
  setup(props, { emit }) {
    const state = reactive({
      list: computed<RateStatus[]>(() =>
        Array(props.count)
          .fill("")
          .map((_, i) =>
            getRateStatus(props.modelValue, i + 1, props.allowHalf)
          )
      ),
    });
    const select = (score: number) => {
      if (props.disabled) return;
      emit("update:modelValue", score);
      emit("change", score);
    };
    const renderStar = (status: RateStatus, index: number) => {
      const isFull = status === "full";
      const isVoid = status === "void";
      const basicClass = [
        "r-rate__icon",
        props.disabled ? "r-rate__icon--disabled" : "",
        props.readonly ? "r-rate__icon--readonly" : "",
      ];
      const iconClass = [
        ...basicClass,
        isFull ? `r-rate__icon--full` : isVoid ? `r-rate__icon--void` : "",
      ];
      const halfIconClass = [
        ...basicClass,
        !isVoid ? `r-rate__icon--full` : `r-rate__icon--void`,
      ];
      const score = index + 1;
      const name = isFull ? props.icon : props.voidIcon;
      const halfName = !isVoid ? props.icon : props.voidIcon;
      // const style: CSSProperties = {
      //   color: isVoid ? props.voidColor : isFull ? props.color : "",
      // };
      let halfIcon = props.allowHalf ? (
        <r-icon
          classPrefix={halfIconClass}
          name={halfName}
          color={
            !props.disabled ? (!isVoid ? props.color : props.voidColor) : ""
          }
          size={20}
          onClick={() => {
            select(score - 0.5);
          }}
          class="r-rate__icon--half"
        ></r-icon>
      ) : (
        ""
      );
      let icon = (
        <div class="r-rate__item">
          <r-icon
            classPrefix={iconClass}
            name={name}
            color={
              !props.disabled ? (isFull ? props.color : props.voidColor) : ""
            }
            size={20}
            onClick={() => {
              select(score);
            }}
          ></r-icon>
          {halfIcon}
        </div>
      );
      return icon;
    };
    return { ...toRefs(state), select, renderStar };
  },
  render() {
    const { list, renderStar } = this;
    return <div class="r-rate"> {list.map(renderStar)}</div>;
  },
});
</script>
<style lang="scss" scpoed>
@import "@/package/styles/var.scss";

.r-rate {
  display: inline-flex;
  &__icon {
    color: $icon-default-color;
  }
  &__item {
    position: relative;
    &:not(:last-child) {
      margin-right: 4px;
    }
  }
}

.r-rate__icon--full {
  color: $warning-color;
}

.r-rate__icon--half {
  position: absolute;
  top: 0;
  left: 0;
  width: 50% !important;
  overflow: hidden;
}

.r-rate__icon--disabled {
  color: $icon-default-color;
}
</style>
