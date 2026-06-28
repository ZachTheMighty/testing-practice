test("encrypt abc", () => {
  expect(caesarCipher("abc")).toBe("def");
});
