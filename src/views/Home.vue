<template>
  <div class="home">
    <Menu :list="menuList"></Menu>
  </div>
</template>

<script lang="ts">
import { menuList } from "@/assets/menuList";
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const state = reactive({
      menuList,
    });
    return toRefs({ ...state });
  },
});
</script>

<style lang="scss" scoped>
  .home{
    padding: 30px;
  }
</style>