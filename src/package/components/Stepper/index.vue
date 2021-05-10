<script lang="tsx">
import { defineComponent, reactive, toRefs, onMounted, watch } from "vue";
import { formatNumber } from "../../utils/utils";
export default defineComponent({
  name: "RStepper",
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      currentValue: 0,
    });
    watch(
      () => props.modelValue,
      (value) => {
        console.log("执行watch", value, state.currentValue);
        state.currentValue = value;
      }
    );
    const leftBtn = () => {
      return (
        <span class="r-stepper__iconbox r-stepper__icon--des">
          <r-icon
            name="iconjian"
            color=""
            size={20}
            class="r-stepper__icon"
          ></r-icon>
        </span>
      );
    };
    const rightBtn = () => {
      return (
        <span class="r-stepper__iconbox r-stepper__icon--inc">
          <r-icon
            name="iconjia"
            color=""
            size={20}
            class="r-stepper__icon"
          ></r-icon>
        </span>
      );
    };

    const handlerInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let { value } = input;
      let formatted = +formatNumber(String(value));
      // console.log("formatted", formatted);
      state.currentValue = formatted;
      emit("update:modelValue", formatted);
    };

    return { ...toRefs(state), leftBtn, rightBtn, handlerInput };
  },
  render() {
    const { leftBtn, rightBtn, handlerInput } = this;
    return (
      <div class="r-stepper">
        {leftBtn()}
        <input
          onInput={handlerInput}
          class="r-stepper__input"
          inputmode="decimal"
          value={this.currentValue}
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
    width: 150px;
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
}
</style>
