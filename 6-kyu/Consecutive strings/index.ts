export function longestConsec (strarr: string[], k: number): string {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) return '';

  return strarr.reduce((longest, item, i) => {
    const combined = strarr.slice(i, i + k).join('');
    return combined.length > longest.length ? combined : longest;
  }, '');
}
