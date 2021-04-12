<script lang="tsx">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  computed,
  PropType,
} from "vue";
export default defineComponent({
  name: "RCell",
  props: {
    title: [Number, String],
    value: [Number, String],
    label: String,
    size: String as PropType<"large">,
    icon: String,
  },
  setup(props, { attrs, emit, slots }) {
    const labelDom = props.label ? (
      <div class="r-cell__label">
        <span>{props.label}</span>
      </div>
    ) : (
      ""
    );
    const titleDom =
      props.title || props.label ? (
        <div class="r-cell__title">
          <span>{props.title}</span>
          {labelDom}
        </div>
      ) : (
        ""
      );
    const beforeIconDom = props.icon ? (
      <r-icon name={props.icon} color="#323233" size={22}></r-icon>
    ) : (
      ""
    );
    const cellClass = () => {
      return [
        "r-cell",
        props.size ? `r-cell-${props.size}` : "",
        titleDom ? "" : "r-cell-",
      ];
    };
    return (
      <div class={cellClass()}>
        {beforeIconDom}
        {titleDom}
        <div class="r-cell__value">
          <span>{props.value}</span>
        </div>
      </div>
    );
  },
});
</script>
<style lang="scss" scpoed>
/* @import url() */
.r-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  position: relative;
  &__title {
    flex: 1;
    text-align: left;
    .r-cell__label {
      margin-top: 4px;
      color: #969799;
      font-size: 12px;
      line-height: 18px;
    }
  }
  &__value {
    flex: 1;
    text-align: right;
    position: relative;
    overflow: hidden;
    color: #969799;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
  }
  // &::after {
  //   position: absolute;
  //   box-sizing: border-box;
  //   content: " ";
  //   pointer-events: none;
  //   right: 16px;
  //   bottom: 0;
  //   left: 16px;
  //   border-bottom: 1px solid #ebedf0;
  //   -webkit-transform: scaleY(0.5);
  //   transform: scaleY(0.5);
  // }
}

.r-cell-large {
  font-size: 16px;
  .r-cell__title {
    .r-cell__label {
      font-size: 14px;
    }
  }
}
</style>
