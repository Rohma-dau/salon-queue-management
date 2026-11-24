export function lastRouteSegment(pathname = '') {
  const parts = String(pathname).split('/').filter(Boolean);
  try { return decodeURIComponent(parts.at(-1) || ''); } catch { return parts.at(-1) || ''; }
}
