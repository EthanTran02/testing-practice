// export function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

import { resolveObjectURL } from "buffer";

// export function reverseString(string) {
//   return string.split("").reverse().join("");
// }

// export const calculator = {
//   add: function (num1, num2) {
//     return num1 + num2;
//   },
//   subtract: function (num1, num2) {
//     return num1 - num2;
//   },
//   divide: function (num1, num2) {
//     return num1 / num2;
//   },
//   multiply: function (num1, num2) {
//     return num1 * num2;
//   },
// };

// export function caesarCipher(str, shift) {
//   // Function to shift a single character
//   function shiftChar(char, shift) {
//     // Only shift letters, keep other characters unchanged
//     if (!/[a-zA-Z]/.test(char)) return char;

//     // Determine if uppercase and set base accordingly
//     const isUpperCase = char === char.toUpperCase();
//     const base = isUpperCase ? 65 : 97; // ASCII: A=65, a=97

//     // Convert to 0-25 range, apply shift, mod 26, back to ASCII
//     const code = char.charCodeAt(0);
//     const shifted = (code - base + shift) % 26;
//     // Handle negative shifts
//     const adjusted = shifted < 0 ? shifted + 26 : shifted;

//     return String.fromCharCode(base + adjusted);
//   }

//   // Process each character in the string
//   return str
//     .split("")
//     .map((char) => shiftChar(char, shift))
//     .join("");
// }

export function analyzeArray(array) {
  const average = array.reduce((sum, num) => (sum += num), 0) / array.length;
  const max = Math.max(...array);
  const min = Math.min(...array);
  const length = array.length;
  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
