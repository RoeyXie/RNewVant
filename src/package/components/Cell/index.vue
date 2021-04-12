<script lang="tsx">
import { defineComponent, reactive, toRefs, onMounted } from "vue";
export default defineComponent({
  name: "RCell",
  props: {
    title: [Number, String],
    value: [Number, String],
    label: String,
  },
  setup(props, { attrs, emit, slots }) {
    const state = reactive({});
    const labelDom = props.label ? (
      <div class="r-cell__label">
        <span>{props.label}</span>
      </div>
    ) : (
      ""
    );
    return () => {
      return (
        <div class="r-cell">
          <div class="r-cell__title">
            <span>{props.title}</span>
            {labelDom}
          </div>
          <div class="r-cell__value"></div>
          <span>{props.value}</span>
        </div>
      );
    };
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-cell {
}
</style>
