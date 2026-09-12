export function preloadImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve();
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = src;
  });
}

export function preloadImages(srcs) {
  return Promise.allSettled((srcs ?? []).map(preloadImage));
}

export function minDelay(ms, startedAt) {
  return new Promise((resolve) =>
    setTimeout(resolve, Math.max(0, ms - (Date.now() - startedAt))),
  );
}
