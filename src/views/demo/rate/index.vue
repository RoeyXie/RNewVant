<template>
  <div class="rateview height-100-per">
    <Header text="Rate"></Header>
    <div class="demo-section p-l-20 p-r-20 demo-rate">
      <div class="demo-button-block">
        <p class="demo-section-block__title">基础用法</p>
        <r-rate v-model="value1" />

        <p class="demo-section-block__title">自定义图标</p>
        <r-rate v-model="value2" icon="iconaixin" void-icon="iconaixinxian" />

        <p class="demo-section-block__title">自定义样式</p>
        <r-rate
          v-model="value3"
          color="#ffd21e"
          void-icon="iconyduixingxingshixin"
          void-color="#eee"
        />

        <p class="demo-section-block__title">半星</p>

        <div>
          <r-rate
            v-model="value4"
            color="#ffd21e"
            void-icon="iconyduixingxingshixin"
            void-color="#eee"
            allow-half
          />
        </div>

        <p class="demo-section-block__title">自定义数量</p>
        <r-rate v-model="value5" :count="6" />

        <p class="demo-section-block__title">禁用状态</p>
        <r-rate v-model="value6" allow-half disabled />

        <p class="demo-section-block__title">只读状态</p>
        <r-rate v-model="value7" allow-half readonly />

        <p class="demo-section-block__title">监听 change 事件</p>
        <r-rate v-model="value8" @change="onChange" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Toast } from "vant";
export default defineComponent({
  name: "Rateview",
  props: {},
  setup() {
    const state = reactive({
      value1: 1,
      value2: 2,
      value3: 3,
      value4: 2.5,
      value5: 4,
      value6: 2.5,
      value7: 2.5,
      value8: 3,
    });
    const onChange = (value: number) => Toast("当前值：" + value);
    return { ...toRefs(state), onChange };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.rateview {
  .demo-rate {
    background: #ffffff;
  }
}
</style>
