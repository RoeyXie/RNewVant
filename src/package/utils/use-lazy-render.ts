import { ref, watch, WatchSource } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useLazyRender(show: WatchSource<boolean | undefined>) {
  const inited = ref(false);

  watch(
    show,
    (value) => {
      if (value) {
        inited.value = value;
      }
    },
    { immediate: true }
  );

  return (render: () => JSX.Element) => () => (inited.value ? render() : null);
}
