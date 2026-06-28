import caesarCipher from "../functions/caesar_cipher.js";

test("encrypt abc", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});
