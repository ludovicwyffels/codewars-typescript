export class Kata {
  static highAndLow (numbers: string): string {
    const orderedNumbers = numbers.split(' ').map(string => Number(string));
    return `${Math.max(...orderedNumbers)} ${Math.min(...orderedNumbers)}`;
  }
}
