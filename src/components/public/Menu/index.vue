<template>
  <div class="menu">
    <ul v-for="item in list" :key="item.id">
      <p>
        {{ item.name }}
      </p>
      <li v-for="i in item.list" :key="i.id">
        <router-link :to="i.url" class="flex-between menu-item">
          <span>
            {{ i.name }}
          </span>
          <van-icon name="arrow" />
        </router-link>
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
    return {...toRefs(state)};
  },
});
</script>
<style lang="scss">
/* @import url() */
.menu {
  font-size: 14px;
  .menu-item {
    display: flex;
    margin: 0 0 12px;
    padding: 0 20px;
    color: #323233;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
  }
}
</style>
