const hasPerformance =
  Object.prototype.toString.call(performance) === '[object Performance]';
const now = hasPerformance ? () => performance.now() : () => Date.now();

interface TimeoutId {
  id: number;
}

export function requestTimeout(cb: Function, delay: number): TimeoutId {
  const start = now();
  const timeoutId: TimeoutId = { id: requestAnimationFrame(tick) };

  function tick() {
    if (now() - start >= delay) {
      cb.call(null);
    } else {
      timeoutId.id = requestAnimationFrame(tick);
    }
  }

  return timeoutId;
}

export function cancelRequestTimeout(timeoutId: TimeoutId) {
  cancelAnimationFrame(timeoutId.id);
}

export function requestInterval(cb: Function, delay: number) {
  let start = now();
  const timeoutId: TimeoutId = { id: requestAnimationFrame(tick) };

  function tick() {
    if (now() - start >= delay) {
      cb.call(null);
      start = now();
      timeoutId.id = requestAnimationFrame(tick);
    } else {
      timeoutId.id = requestAnimationFrame(tick);
    }
  }

  return timeoutId;
}

export function cancelInterval(timeoutId: TimeoutId) {
  cancelAnimationFrame(timeoutId.id);
}
