export class Kata {
  static dnaStrand (dna: string): string {
    const pairs: any = { A: 'T', T: 'A', C: 'G', G: 'C' };

    return dna
      .split('')
      .map(string => pairs[string])
      .join('');
  }
}
