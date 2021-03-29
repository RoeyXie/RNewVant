<template>
  <div class="test">
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model:show="show" @confirm="onConfirm" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "RButton",
  components: {},
  setup() {
    const state = reactive({
      date: "",
      show: false,
    });
    const formatDate: (date: Date) => string = (date: Date) =>
      `${date.getMonth() + 1}/${date.getDate()}`;

    const onConfirm: (value: Date) => void = (value: Date) => {
      state.show = false;
      state.date = formatDate(value);
    };
    return { ...toRefs(state), onConfirm };
  },
});
</script>
<style lang="scss" scoped>
/* @import url() */
</style>
