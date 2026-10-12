export function optimizedImg(src, w, h) {
  if (!src) return '';
  return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${w}&h=${h}&fit=cover&q=80`;
}