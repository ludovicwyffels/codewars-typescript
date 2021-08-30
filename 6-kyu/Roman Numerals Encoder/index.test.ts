import { solution } from '.';

describe('solution', () => {
  it('basic', () => {
    expect(solution(1000)).toBe('M');
    expect(solution(4)).toBe('IV');
    expect(solution(1)).toBe('I');
    expect(solution(1990)).toBe('MCMXC');
    expect(solution(2008)).toBe('MMVIII');
    expect(solution(1444)).toBe('MCDXLIV');
  });

  it('more test', () => {
    expect(solution(2)).toBe('II');
    expect(solution(3)).toBe('III');
    expect(solution(5)).toBe('V');
    expect(solution(6)).toBe('VI');
    expect(solution(7)).toBe('VII');
    expect(solution(9)).toBe('IX');
    expect(solution(10)).toBe('X');
    expect(solution(12)).toBe('XII');
    expect(solution(19)).toBe('XIX');
    expect(solution(49)).toBe('XLIX');
    expect(solution(999)).toBe('CMXCIX');
  });
});
