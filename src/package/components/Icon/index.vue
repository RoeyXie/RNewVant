<template>
  <div @click="clickHandler" class="r-icon">
    <i :style="fontStyle" :class="iconClass">
      <img v-if="showImg" :src="name" class="r-iconfont__image" />
      <div v-if="dot || badge" :class="dotClass">{{ badge }}</div>
    </i>
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, toRefs, computed } from "vue";
import { getPx } from "../../utils/utils";
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
  },
  setup(props, { emit }) {
    const state = reactive({
      showImg: computed(() => {
        const reg = /^http/;
        return reg.test(props.name);
      }),
      fontStyle: computed(() => {
        return {
          fontSize: props.size ? getPx(props.size) : "32px",
          color: props.color || "#323233",
          width: props.size ? getPx(props.size) : "32px",
          height: props.size ? getPx(props.size) : "32px",
        };
      }),
      dotClass: computed(() => {
        return ["r-badge", props.dot ? "r-badge-dot" : ""];
      }),
    });
    const iconClass = computed(() => {
      return !state.showImg
        ? ["r-iconfont", "iconfont", props.name]
        : "r-iconfont imgfont";
    });
    const clickHandler = (e: MouseEvent) => {
      emit("click", e);
    };
    return { ...toRefs(state), iconClass, clickHandler };
  },
});
</script>
<style lang="scss">
/* @import url() */
.r-icon {
  display: inline-block;
  &font {
    position: relative;
    display: inline-block;
    line-height: 1;
    // margin: 16px 0 16px;
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
      color: #fff;
      font-weight: 500;
      font-size: 12px;
      font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
      line-height: 1.2;
      text-align: center;
      background-color: #ee0a24;
      border: 1px solid #fff;
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
      background-color: #ee0a24;
      border-radius: 100%;
    }
  }
}
</style>
