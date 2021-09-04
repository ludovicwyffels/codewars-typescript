export function countBits (n: number): number {
  return n.toString(2).split('').reduce((a, b) => (b === '1' ? ++a : a), 0);
}
