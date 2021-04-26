<script lang="tsx">
import { defineComponent, PropType } from "vue";
type directionType = "left" | "up" | "down";

export default defineComponent({
  name: "RCell",
  props: {
    title: [Number, String],
    value: [Number, String],
    label: String,
    size: String as PropType<"large">,
    icon: String,
    isLink: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    arrowDirection: {
      type: String as PropType<directionType>,
      default: "right",
    },
  },
  setup(props, { slots }) {
    const labelDom = props.label ? (
      <div class="r-cell__label">
        <span>{props.label}</span>
      </div>
    ) : (
      ""
    );
    const titleDom = slots.title ? (
      <div class="r-cell__title">{slots.title()}</div>
    ) : props.title || props.label ? (
      <div class="r-cell__title">
        <span>{props.title}</span>
        {labelDom}
      </div>
    ) : (
      ""
    );
    const beforeIconDom = props.icon ? (
      <r-icon
        name={props.icon}
        color="#323233"
        size={18}
        class="m-r-5"
      ></r-icon>
    ) : (
      ""
    );
    const arrowIcon = `icon-${props.arrowDirection}`;
    const arrowIconDom = props.isLink ? (
      <r-icon
        name={arrowIcon}
        color="#969799"
        size={15}
        class="m-l-10"
      ></r-icon>
    ) : (
      ""
    );
    const afterIconDom = slots["right-icon"]
      ? slots["right-icon"]()
      : arrowIconDom;
    const valueDom = slots.default ? (
      <div class="r-cell__value">{slots.default()}</div>
    ) : (
      <div class="r-cell__value">
        <span>{props.value}</span>
      </div>
    );
    const cellClass = () => {
      return [
        "r-cell",
        // "r-hairline--top-bottom",
        props.size ? `r-cell-${props.size}` : "",
        titleDom ? "" : "r-cell-only-value",
        props.center ? "r-cell-center" : "",
      ];
    };
    return () => (
      <div class={cellClass()}>
        {beforeIconDom}
        {titleDom}
        {valueDom}
        {afterIconDom}
      </div>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
@import "@/package/styles/var.scss";
.r-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: $font-color;
  font-size: 14px;
  line-height: 24px;
  background-color: $white-color;
  position: relative;
  &__title {
    flex: 1;
    text-align: left;
    .r-cell__label {
      margin-top: 4px;
      color: $value-color;
      font-size: 12px;
      line-height: 18px;
    }
  }
  &__value {
    flex: 1;
    text-align: right;
    position: relative;
    overflow: hidden;
    color: $value-color;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
  }
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    transform: scaleY(0.5);
  }
}

.r-cell-large {
  font-size: 16px;
  .r-cell__title {
    .r-cell__label {
      font-size: 14px;
    }
  }
}

.r-cell-only-value {
  .r-cell__value {
    text-align: left;
    color: $font-color;
  }
}

.r-cell-center {
  align-items: center;
}
</style>
