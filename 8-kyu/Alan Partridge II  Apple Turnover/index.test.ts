import { apple } from '.';

describe('Basic test', () => {
  it('Basic test should work', () => {
    expect(apple('50')).toBe('It\'s hotter than the sun!!');
    expect(apple(4)).toBe('Help yourself to a honeycomb Yorkie for the glovebox.');
    expect(apple('12')).toBe('Help yourself to a honeycomb Yorkie for the glovebox.');
    expect(apple(60)).toBe('It\'s hotter than the sun!!');
  });
});
