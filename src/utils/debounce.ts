function debounce<A extends unknown[], R>(
  func: (...args: A) => R,
  wait: number
): (...args: A) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (...args: A): void {
    const later = () => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    };

    if (!timeout) {
      func(...args);
      timeout = setTimeout(later, wait);
    }
  };
}

export default debounce;
