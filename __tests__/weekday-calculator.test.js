import Calculator from '../src/weekday-calculator.js';

describe('Calculator', () => {

  let calculator;

  beforeEach(() => {
    calculator = new Calculator(1, 21, 1992);
  });

  test('should correctly give day of the week from month, day, and year', () => {
    expect(calculator.calculate()).toEqual('Tuesday');
  });
});