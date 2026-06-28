import calculator from "../functions/calculator.js";

test("5 + 7", () => {
  expect(calculator.add(5, 7)).toBe(12);
});

test("5 - 7", () => {
  expect(calculator.subtract(5, 7)).toBe(-2);
});
