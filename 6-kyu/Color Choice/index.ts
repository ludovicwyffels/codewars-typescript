export function checkchoose (m: number, n: number): number {
  let x = 1;
  for (let i = 1; i < n; i++) {
    x = Math.round((x * (n + 1 - i)) / i);
    if (x === m) return i;
  }
  return -1;
}
