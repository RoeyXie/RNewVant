<template>
  <div class="popup-view height-100-per">
    <r-cell is-link @click="showPopup">展示弹出层</r-cell>
    <r-popup v-model:show="show">内容</r-popup>

    <r-cell is-link @click="showPopup2">顶部弹出</r-cell>
    <r-popup v-model:show="show2" position="top" :style="{ height: '30%' }" />

    <r-cell is-link @click="showPopup3">底部部弹出</r-cell>
    <r-popup v-model:show="show3" position="bottom" :style="{ height: '30%' }" />

    <r-cell is-link @click="showPopup4">左边弹出</r-cell>
    <r-popup v-model:show="show4" position="left" :style="{ width: '30%' }" />

    <r-cell is-link @click="showPopup5">右边弹出</r-cell>
    <r-popup v-model:show="show5" position="right" :style="{ width: '30%' }" />
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
      show2: false,
      show3: false,
      show4: false,
      show5: false,
    });
    const showPopup = () => {
      state.show = true;
    };
    const showPopup2 = () => {
      state.show2 = true;
    };
    const showPopup3 = () => {
      state.show3 = true;
    };
    const showPopup4 = () => {
      state.show4 = true;
    };
    const showPopup5 = () => {
      state.show5 = true;
    };
    return {
      ...toRefs(state),
      showPopup,
      showPopup2,
      showPopup3,
      showPopup4,
      showPopup5,
    };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.popup-view {
}
</style>
