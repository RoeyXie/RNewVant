<template>
  <div class="rateview">
    <div>
      <van-rate v-model="value" />
    </div>
    <div>
      <r-rate v-model="value" />
    </div>
    <div>
      <r-rate v-model="value" icon="iconaixin" void-icon="iconaixinxian" />
    </div>
    <div>
      <r-rate
        v-model="value"
        :size="25"
        color="#ffd21e"
        void-icon="iconyduixingxingshixin"
        void-color="#eee"
      />
    </div>
    <div>
      <r-rate
        v-model="value"
        :size="25"
        color="#ffd21e"
        void-icon="iconyduixingxingshixin"
        void-color="#eee"
        allow-half
      />
    </div>
    <div>
      <r-rate v-model="value" allow-half />
    </div>
    <div></div>
    <r-rate v-model="value" allow-half disabled />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Rateview",
  props: {},
  setup() {
    const state = reactive({
      value: 3,
    });
    return { ...toRefs(state) };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.rateview {
}
</style>
