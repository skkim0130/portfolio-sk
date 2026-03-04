const cache = new Set();

export function preloadImage(src) {
  if (!src || cache.has(src)) return;

  const img = new Image();
  img.decoding = "async";
  img.src = src;

  cache.add(src);
}
