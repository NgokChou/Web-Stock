import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock('Testuto Company', 'TC', 67, 100, 'NASDAQ')).toBeTruthy();
  });
});
