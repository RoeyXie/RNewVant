<template>
  <i :style="fontStyle" @click="clickHandler" class="r-icon" :class="iconClass">
    <img v-if="showImg" :src="name" class="r-iconfont__image" />
    <div v-if="dot || badge" :class="dotClass">{{ badge }}</div>
  </i>
</template>

<script lang="tsx">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { getPx } from "../../utils/utils";
import { getFontSize } from "@/adapt";
export default defineComponent({
  name: "RIcon",
  props: {
    dot: Boolean,
    name: {
      type: String,
      required: true,
    },
    size: [Number, String],
    badge: [Number, String],
    color: String,
    classPrefix: [String, Array],
  },
  setup(props, { emit }) {
    const state = reactive({
      showImg: computed(() => {
        return /^http/.test(props.name);
      }),
      fontStyle: computed(() => {
        const DEFAULT_SIZE = 32;
        let fontSize;
        const dprSize = props.size || DEFAULT_SIZE;
        if (/px/.test(dprSize.toString()) || typeof dprSize === "number") {
          const propsFontSize = +getPx(dprSize).slice(0, -2);
          fontSize = getPx(getFontSize(propsFontSize));
        } else {
          // % 与 rem
          fontSize = props.size;
        }
        return {
          fontSize,
          color: props.color,
          width: fontSize,
          height: fontSize,
        };
      }),
      dotClass: computed(() => {
        return ["r-badge", props.dot ? "r-badge-dot" : ""];
      }),
    });
    const iconClass = computed(() => {
      return !state.showImg
        ? ["r-iconfont", "iconfont", props.name, props.classPrefix]
        : ["r-iconfont", "imgfont", props.classPrefix];
    });
    const clickHandler = (e: MouseEvent) => {
      emit("click", e);
    };
    return { ...toRefs(state), iconClass, clickHandler };
  },
});
</script>
<style lang="scss">
@import "@/package/styles/var.scss";
.r-icon {
  display: flex;
  align-items: center;
  &font {
    position: relative;
    display: inline-block;
    line-height: 1;
    color: $font-color;
    &__image {
      width: 1em;
      height: 1em;
    }
    .r-badge {
      position: absolute;
      top: 0;
      right: 0;
      box-sizing: border-box;
      min-width: 16px;
      padding: 0 3px;
      color: $white-color;
      font-weight: 500;
      font-size: 12px;
      font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
      line-height: 1.2;
      text-align: center;
      background-color:$warning-color;
      border: 1px solid $white-color;
      border-radius: 16px;
      -webkit-transform: translate(50%, -50%);
      transform: translate(50%, -50%);
      -webkit-transform-origin: 100%;
      transform-origin: 100%;
    }
    .r-badge-dot {
      width: 8px;
      min-width: 0;
      height: 8px;
      background-color:$warning-color;
      border-radius: 100%;
    }
  }
}
</style>
