export function countSheeps (arrayOfSheep: (boolean | undefined | null)[]): number {
  return arrayOfSheep.filter(Boolean).length;
}
