export function firstNonConsecutive (arr: number[]) : null | number {
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i] + 1;
    const consecutive = arr[i + 1];
    if (num !== consecutive) return consecutive;
  }
  return null;
}
