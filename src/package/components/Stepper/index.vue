<script lang="tsx">
import { defineComponent, reactive, toRefs, computed, watch } from "vue";
import { formatNumber, getPx } from "../../utils/utils";
import { getFontSize } from "@/adapt";
export default defineComponent({
  name: "RStepper",
  props: {
    modelValue: {
      type: [Number, String],
      default: 0,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    max: Number,
    min: {
      type: Number,
      default: 1,
    },
    integer: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disableInput: {
      type: Boolean,
      default: false,
    },
    decimalLength: {
      type: Number,
      default: 0,
    },
    inputWidth: {
      type: [Number, String],
      default: 0,
    },
  },
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      currentValue: 0 as string | number,
      inputStyle: computed(() => {
        const DEFAULT_SIZE = 32;
        let width;
        const widthSize = props.inputWidth || DEFAULT_SIZE;
        if (/px/.test(widthSize.toString()) || typeof widthSize === "number") {
          const propsFontSize = +getPx(widthSize).slice(0, -2);
          width = getPx(getFontSize(propsFontSize));
        } else {
          // % 与 rem
          width = props.inputWidth;
        }
        return {
          width,
        };
      }),
    });
    const step = +props.step;
    const powper = (value: number) => {
      let sq1;
      try {
        sq1 = value.toString().split(".")[1].length;
      } catch (e) {
        sq1 = 0;
      }
      const m = Math.pow(10, sq1);
      return m;
    };
    const minus = () => {
      let power = powper(+state.currentValue);
      return (+state.currentValue * power - step * power) / power;
    };
    const add = () => {
      let power = powper(+state.currentValue);
      return (+state.currentValue * power + step * power) / power;
    };
    const decreaseHandler = () => {
      if (props.disabled) return;
      let value = beforeChange(minus());
      emit("update:modelValue", value);
    };
    const increaseHandler = () => {
      if (props.disabled) return;
      let value = beforeChange(add());
      emit("update:modelValue", value);
    };
    const beforeChange = (value: number): number | string => {
      let result: number | string = value;
      if (value < props.min) result = props.min;
      if (props.max && value > props.max) result = props.max;
      if (props.integer) result = parseInt(result.toString());
      if (props.decimalLength) result = (+result).toFixed(props.decimalLength);
      console.log("beforeChange", result);
      return result;
    };
    const leftBtn = () => {
      return (
        <span class="r-stepper__iconbox r-stepper__icon--des">
          <r-icon
            name="iconjian"
            color={
              props.disabled || (props.min && props.min === state.currentValue)
                ? "#c8c9cc"
                : ""
            }
            size={20}
            class="r-stepper__icon"
            onClick={decreaseHandler}
          ></r-icon>
        </span>
      );
    };
    const rightBtn = () => {
      return (
        <span class="r-stepper__iconbox r-stepper__icon--inc">
          <r-icon
            name="iconjia"
            color={
              props.disabled || (props.max && props.max === state.currentValue)
                ? "#c8c9cc"
                : ""
            }
            size={20}
            class="r-stepper__icon"
            onClick={increaseHandler}
          ></r-icon>
        </span>
      );
    };
    const handlerInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let { value } = input;
      let formatted: string | number = formatNumber(
        String(value),
        !props.integer
      );
      formatted =
        typeof +formatted === "number" ? beforeChange(+formatted) : formatted;
      input.value = formatted.toString();
      state.currentValue = formatted;
      emit("update:modelValue", formatted);
    };
    const inputClass = () => {
      return [
        "r-stepper__input",
        props.disabled ? "r-stepper__input--disabled" : "",
      ];
    };
    watch(
      () => props.modelValue,
      (value) => {
        state.currentValue = beforeChange(+value);
      },
      {
        immediate: true,
      }
    );
    return { ...toRefs(state), leftBtn, rightBtn, handlerInput, inputClass };
  },
  render() {
    const {
      leftBtn,
      rightBtn,
      handlerInput,
      inputClass,
      disabled,
      disableInput,
      inputStyle,
    } = this;
    return (
      <div class="r-stepper">
        {leftBtn()}
        <input
          onInput={handlerInput}
          class={inputClass()}
          style={inputStyle}
          inputmode="decimal"
          value={this.currentValue}
          disabled={disabled || disableInput}
        />
        {rightBtn()}
      </div>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-stepper {
  &__input {
    box-sizing: border-box;
    width: 32px;
    height: 28px;
    margin: 0 2px;
    padding: 0;
    color: #323233;
    font-size: 14px;
    line-height: normal;
    text-align: center;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    -webkit-appearance: none;
  }
  &__input--disabled {
    background-color: #f2f3f5;
    color: #c8c9cc;
  }
  &__iconbox {
    display: inline-block;
    width: 32px;
    height: 28px;
    vertical-align: middle;
    line-height: 1.75rem;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #323233;
    background-color: #f2f3f5;
    border: 0;
    cursor: pointer;
  }
  &__icon {
    vertical-align: middle;
  }
  &__icon--des {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &__icon--inc {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  &__icon--des--disabled,
  &__icon--inc--disabled {
    color: #c8c9cc;
    background-color: #f7f8fa;
    cursor: not-allowed;
  }
}
</style>
