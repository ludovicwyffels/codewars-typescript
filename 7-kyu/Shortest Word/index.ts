export function findShort (s: string): number {
  const words = s.split(' ');
  let shortLength = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < words.length; i++) {
    const length = words[i].length;
    if (shortLength > length) {
      shortLength = length;
    }
  }
  return shortLength;
}
