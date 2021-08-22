export function squareSum (numbers: number[]): number {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
