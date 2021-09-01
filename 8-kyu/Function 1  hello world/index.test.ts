import { greet } from '.';

describe('function 1 hello world', function () {
  it('test', function () {
    expect(greet()).toBe('hello world!');
  });
});
