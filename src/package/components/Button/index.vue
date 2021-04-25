<script lang="tsx">
import { defineComponent, PropType } from "vue";
type ButtonType = "default" | "primary" | "info" | "warning" | "danger";
type ButtonSize = "large" | "normal" | "small" | "mini";
type LoadingType = "circular" | "spinner";
export default defineComponent({
  name: "RButton",
  components: {},
  props: {
    tag: {
      type: String,
      default: "button",
    },
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
    text: String,
    loadingType: {
      type: String as PropType<LoadingType>,
      default: "circular",
    },
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
  setup(props, { emit, slots }) {
    const btnClass = () => {
      return [
        "r-button",
        `r-button--${props.type}`,
        `r-button--${props.size}`,
        props.plain ? "r-button--plain" : "",
        props.hairline ? "r-button--hairline" : "",
        props.disabled ? "r-button--disabled" : "",
        props.square ? "r-button--square" : "",
        props.round ? "r-button--round" : "",
        props.block ? "r-button--block" : "",
      ];
    };
    const btnStyle = () => {
      return {
        color: props.plain ? props.color : props.color ? "#ffffff" : "",
        background: props.plain ? "" : props.color,
        borderColor: props.plain && props.color,
      };
    };
    const clickHandler = (e: MouseEvent) => {
      emit("click", e);
    };
    const renderIcon = () => {
      if (props.loading) {
        const LOADINGTYPEIMG: {
          circular: string;
          spinner: string;
        } = {
          circular: "iconloading2",
          spinner: "iconloadingspinner",
        };
        const name: string = LOADINGTYPEIMG[props.loadingType];
        return (
          <r-icon
            name={name}
            color="#ffffff"
            size={22}
            class="turn-around"
          ></r-icon>
        );
      }
      if (props.icon) {
        return <r-icon name={props.icon} color="#ffffff" size={24} />;
      }
    };
    const renderText = () => {
      const { text, loading, loadingText } = props;
      if (loading) return loadingText || text;
      return slots.default ? slots.default() : text;
    };
    return () => {
      const { tag, disabled } = props;
      return (
        <tag
          onClick={clickHandler}
          class={btnClass()}
          style={btnStyle()}
          disabled={disabled}
        >
          <div class="flex-center height-100-per">
            {renderIcon()}
            <span class="r-button__text">{renderText()}</span>
          </div>
        </tag>
      );
    };
  },
});
</script>
<style lang="scss" scpoed>
@import "@/package/styles/var.scss";
.r-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 44px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: $black-color;
    border: inherit;
    border-color: $black-color;
    border-radius: inherit;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    content: " ";
  }
}

.r-button:active::before {
  opacity: 0.1;
}

.r-button--normal {
  padding: 0 15px;
  font-size: 14px;
}

.r-button--default {
  color: $font-color;
  background-color: $white-color;
  border: 1px solid $border-color;
}

.r-button--primary {
  color: $white-color;
  background-color: $success-color;
  border: 1px solid $success-color;
}

.r-button--info {
  color: $white-color;
  background-color: $primary-color;
  border: 1px solid $primary-color;
}

.r-button--danger {
  color: $white-color;
  background-color: $warning-color;
  border: 1px solid $warning-color;
}

.r-button--warning {
  color: $white-color;
  background-color: $danger-color;
  border: 1px solid $danger-color;
}

.r-button--plain {
  background-color: $white-color;
}

.r-button--plain.r-button--default {
  color: $font-color;
}

.r-button--plain.r-button--primary {
  color: $success-color;
}

.r-button--plain.r-button--info {
  color: $primary-color;
}

.r-button--plain.r-button--danger {
  color: $warning-color;
}

.r-button--plain.r-button--warning {
  color: $danger-color;
}

.r-button--hairline {
  border-width: 0;
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 0 solid $border-color;
    transform: scale(0.5);
    border-width: 1px;
    border-radius: 4px;
    border-color: inherit;
  }
}

.r-button--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.r-button--square {
  border-radius: 0;
}

.r-button--round {
  border-radius: 999px;
}

.r-button--large {
  width: 100%;
  height: 50px;
}

.r-button--small {
  height: 32px;
  padding: 0 8px;
  font-size: 12px;
}

.r-button--mini {
  height: 24px;
  padding: 0 4px;
  font-size: 10px;
}

.r-button--block {
  display: block;
  width: 100%;
}
</style>