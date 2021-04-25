<template>
  <div class="popup-view height-100-per">
    <r-cell is-link @click="showPopup">展示弹出层</r-cell>
    <r-popup v-model:show="show">内容</r-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  name: "PopUpView",
  props: {},
  setup(props, { attrs, emit, slots }) {
    const state = reactive({
      show: false,
    });
    const showPopup = () => {
      state.show = true;
    };
    return { ...toRefs(state), showPopup };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.popup-view {
}
</style>
