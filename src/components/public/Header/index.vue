
<template>
  <div class="header flex-center">
    <RIcon
      :size="24"
      @click.stop="backHandler"
      class="header-back_icon"
      name="icon-left"
    ></RIcon>
    <span class="header-back_text"> {{ text }} </span>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import router from "@/router";

export default defineComponent({
  name: "Header",
  components: {},
  props: {
    text: String,
    backUrl: String,
  },
  setup(props, { emit }) {
    const state = reactive({});
    const backHandler = () => {
      if (props.backUrl) {
        router.push(props.backUrl);
      } else {
        router.go(-1);
      }
      emit("back");
    };
    return { ...toRefs(state), backHandler };
  },
});
</script>
<style lang="scss">
/* @import url() */
.header {
  height: 56px;
  background-color: #fff;
  position: relative;
  &-back_icon {
    position: absolute !important;
    top: 16px;
    left: 16px;
  }
  &-back_text {
    font-weight: 600;
    font-size: 19px;
    text-transform: capitalize;
  }
}
</style>
