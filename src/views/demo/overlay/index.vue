<template>
  <div class="overlay-view height-100-per">
    <Header text="Overlay"></Header>

    <div class="demo-section p-l-20 p-r-20">
      <div class="demo-button-block">
        <p class="demo-section-block__title">显示遮罩层</p>

        <r-button type="primary" text="显示遮罩层" @click="show = true" />
        <r-overlay :show="show" @click="show = false" />

        <p class="demo-section-block__title">嵌入内容</p>
        <r-button type="primary" text="嵌入内容" @click="showOverlay = true" />
        <r-overlay :show="showOverlay" @click="showOverlay = false">
          <div class="wrapper">
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
            <div class="block" @click.stop />
          </div>
        </r-overlay>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "OverlayView",
  props: {},
  setup() {
    const state = reactive({
      show: false,
      showOverlay: false,
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.overlay-view {
  .wrapper {
    height: 100%;
    overflow-y: auto;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
    margin: 0 auto;
  }

  .block:nth-child(odd) {
    background-color: aliceblue;
  }
}
</style>
