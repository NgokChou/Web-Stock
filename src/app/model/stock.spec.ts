import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock('Apple', 'AAPL', 100, 120)).toBeTruthy();
  });
});
