export function getRealFloor (n: number): number {
  return (n > 13 ? n - 2 : (n > 0 ? n - 1 : n));
}
