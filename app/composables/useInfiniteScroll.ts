import { onBeforeUnmount, ref } from "vue";

export function useInfiniteScroll(
  callback: () => void,
  options?: IntersectionObserverInit,
) {
  // 감시 대상 DOM
  const target = ref<HTMLElement | null>(null);

  let observer: IntersectionObserver | null = null;

  watch(
    target,
    (el) => {
      // !import.meta.client <= 브라우저에서 실행중인지 확인하는 플래그
      if (!el || !import.meta.client) return;

      observer?.disconnect();

      // observer 생성
      // 요소가 화면 안에 들어오는지 감시
      observer = new IntersectionObserver((entries) => {
        // 감시 결과 배열
        const [entry] = entries;

        // 화면 진입 체크
        if (entry?.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(el);
    },
    { flush: "post" }, // DOM 업데이트가 끝난 뒤 watcher를 실행하라는 옵션값
  );

  const disconnect = () => {
    observer?.disconnect();
  };

  onBeforeUnmount(() => {
    disconnect();
  });

  return {
    target,
  };
}
