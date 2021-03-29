<template>
  <div class="r-icon">
    <i :style="fontStyle" :class="iconClass">
      <img v-if="showImg" :src="name" class="r-iconfont__image" />
      <div :class="dotClass"></div>
    </i>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, computed } from "vue";
import { getPx } from "../../utils/utils.ts";
export default defineComponent({
  name: "RIcon",
  props: {
    dot: Boolean,
    name: String,
    size: [Number, String],
    badge: [Number, String],
    color: String,
  },
  setup(props, { root, emit }) {
    const state = reactive({
      iconClass: computed(() => {
        return !state.showImg
          ? ["r-iconfont", "iconfont", props.name]
          : "r-iconfont imgfont";
      }),
      showImg: computed(() => {
        const reg = /^http/;
        return reg.test(props.name);
      }),
      fontStyle: computed(() => {
        return {
          fontSize: getPx(props.size) || "32px",
        };
      }),
      dotClass: computed(() => {
        return ["r-badge", props.dot ? "r-badge-dot" : ""];
      }),
    });
    return { ...toRefs(state) };
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
    margin: 16px 0 16px;
    &__image {
      width: 1em;
      height: 1em;
    }
  }
}
</style>
