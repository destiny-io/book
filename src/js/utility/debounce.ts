interface DebouncedFunction<T extends (...args: any[]) => void> {
  (...args: Parameters<T>): void;
  cancel: () => void;
  flush: () => void;
  pending: () => boolean;
}

/**
 * 防抖函数封装
 * @param fn      需要防抖的原始函数（无返回值）
 * @param delay   防抖延迟（单位：ms）
 * @param leading 是否立即触发（默认 false）
 * @returns       包装后的防抖函数
 */
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
  leading: boolean = false
): DebouncedFunction<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: any;
  let invoked = false;

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  const invoke = () => {
    if (lastArgs) {
      fn.apply(lastThis, lastArgs);
      lastArgs = null;
      invoked = true;
    }
  };

  const debounced = function (this: any, ...args: Parameters<T>): void {
    lastArgs = args;
    lastThis = this;

    // 立即执行模式：第一次调用立即执行
    if (leading && !timer && !invoked) {
      invoke();
    } else {
      // 非立即执行模式或非首次调用：清除之前的计时器
      clearTimer();
    }

    // 设置新的计时器
    timer = setTimeout(() => {
      if (!leading || invoked) {
        invoke();
      }
      timer = null;
      invoked = false;
    }, delay);
  };

  debounced.cancel = () => {
    clearTimer();
    lastArgs = null;
    invoked = false;
  };

  debounced.flush = () => {
    clearTimer();
    invoke();
    invoked = false;
  };

  debounced.pending = () => {
    return timer !== null;
  };

  return debounced;
}
