import { analyzeArray } from "./main";

// test("capitalize", () => {
//   expect(capitalize("hello")).toBe("Hello");
// });

// test("reverseString", () => {
//   expect(reverseString("hello")).toBe("olleh");
// });

// // calculator test
// test("calculator", () => {
//   expect(calculator.add(1, 2)).toBe(3);
// });
// test("calculator", () => {
//   expect(calculator.subtract(7, 5)).toBe(2);
// });
// test("calculator", () => {
//   expect(calculator.divide(9, 3)).toBe(3);
// });
// test("calculator", () => {
//   expect(calculator.multiply(7, 3)).toBe(21);
// });

// Caesar cipher
// test("Caesar cipher", () => {
//   expect(caesarCipher("hello", 4)).toBe("lipps");
// });

test("analyze", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze", () => {
  expect(analyzeArray([1, 6, 2])).toStrictEqual({
    average: 3,
    min: 1,
    max: 6,
    length: 3,
  });
});
