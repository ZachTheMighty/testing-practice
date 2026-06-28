import caesarCipher from "../functions/caesar_cipher.js";

test("encrypt abc", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("ecrypt uppercase", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("ecrypt punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
