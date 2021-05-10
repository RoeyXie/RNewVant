/* eslint-disable @typescript-eslint/no-unused-vars */
<script lang="tsx">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useRefs } from "../../utils/use-refs";
import { useTouch } from "../../utils/use-touch";
type RateStatus = "full" | "half" | "void";
interface RangesInterface {
  left: number;
  score: number;
}
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
    touchable: {
      type: Boolean,
      default: true,
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
      untouchable: computed(() => {
        return props.readonly || props.disabled || !props.touchable;
      }),
      unchangeable: computed(() => {
        return props.readonly || props.disabled;
      }),
    });
    const [itemRefs, setItemRefs] = useRefs();
    const touch = useTouch();
    let ranges: RangesInterface[] = [];
    const select = (score: number) => {
      if (state.unchangeable) return;
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
      let halfIcon = () => {
        return props.allowHalf ? (
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
      };
      let icon = (
        <div ref={setItemRefs(index)} class="r-rate__item">
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
          {halfIcon()}
        </div>
      );
      return icon;
    };

    const getScoreByPosition = (x: number): number => {
      x = x || 0;
      for (let i = ranges.length - 1; i > 0; i--) {
        const item = ranges[i];
        if (x > item.left) {
          return item.score;
        }
      }
      return props.allowHalf ? 0.5 : 1;
    };

    const onTouchStart = (event: TouchEvent) => {
      if (state.untouchable) return;
      touch.start(event);
      const rects = itemRefs.value.map((item) => item.getBoundingClientRect());
      ranges = [];
      rects.forEach((item, index) => {
        if (props.allowHalf) {
          ranges.push(
            { left: item.left, score: index + 0.5 },
            { left: item.left + item.width / 2, score: index + 1 }
          );
        } else {
          ranges.push({ left: item.left, score: index + 1 });
        }
      });
    };

    const onTouchMove = (event: TouchEvent) => {
      if (state.untouchable) return;
      touch.move(event);
      const clientX = event.touches[0].clientX;
      event.preventDefault();
      select(getScoreByPosition(clientX));
    };

    return { ...toRefs(state), select, renderStar, onTouchStart, onTouchMove };
  },
  render() {
    const { list, renderStar, onTouchStart, onTouchMove } = this;
    return (
      <div
        role="radio"
        class="r-rate"
        onTouchstart={onTouchStart}
        onTouchmove={onTouchMove}
      >
        {list.map(renderStar)}
      </div>
    );
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
