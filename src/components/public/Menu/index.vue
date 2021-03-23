<template>
  <div class="menu">
    <ul v-for="item in list" :key="item.id">
      <p>
        {{ item.name }}
      </p>
      <li v-for="i in item" :key="i.id">
        {{ i.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "Menu",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const state = reactive({});
    return toRefs({ ...state });
  },
});
</script>
<style lang="scss">
/* @import url() */
.menu {
  font-size: 14px;
}
</style>
