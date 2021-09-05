export class Challenge {
  static getMiddle (s:string): string {
    const stringArray = s.split('');
    const isLengthEven = s.length % 2 === 0;

    if (isLengthEven) {
      const half = stringArray.length / 2;
      return `${stringArray[half - 1]}${stringArray[half]}`;
    }

    const half = Math.floor(stringArray.length / 2);
    return stringArray[half];
  }
}
