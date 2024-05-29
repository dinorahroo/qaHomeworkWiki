describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
    });
    test("Addition works", () => {
      expect(calculator.add(23, 26)).toBe(49);
    });

    test("Subtraction works", () => {
      expect(calculator.subtract(7, 1)).toBe(6);
    });
    test("Multiplication works", () => {
      expect(calculator.multiply(6, 3)).toBe(18);
    });
    test("Division works", () => {
      expect(calculator.divide(81, 9)).toBe(9);
    });
    describe("Stretch Goals", () => {
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
      });
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        //expect(calculatorr.multiply(calculator.divide(28, 4), (6, 2))).toBe();
        expect(calculator.multiply(calculator.divide(28, 4), calculator.divide(6, 2), (calculatorr.add(calculatorr.subtract(30-27)), calculatorr.subtract(3, 4))).toBe(42));

      });
    });
  });
  
  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */

    calculator.add(10, 7) == 17

    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  };