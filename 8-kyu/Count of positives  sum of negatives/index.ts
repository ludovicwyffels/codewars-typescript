export function countPositivesSumNegatives (input: number[] | any): number[] {
  if (!input || !input.length) return [];
  const positives = input.filter((x: number) => x > 0);
  const negatives = input.filter((x: number) => x <= 0);

  return [
    positives.length,
    Math.floor(negatives.reduce((sum: number, value: number) => sum + value, 0))
  ];
}
