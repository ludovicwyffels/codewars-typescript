import { accum } from '.';

describe('Fixed Tests accum', function () {
  it('Basic tests', function () {
    expect(accum('ZpglnRxqenU')).toBe('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
    expect(accum('NyffsGeyylB')).toBe('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
    expect(accum('MjtkuBovqrU')).toBe('M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
  });
});
