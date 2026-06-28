import capitalize from "../functions/capitalize.js";

test("capitalize all lowercase", () => {
  expect(capitalize("bitchassnigga")).toBe("Bitchassnigga");
});

test("capitalize all uppercase", () => {
  expect(capitalize("BITCHASSNIGGA")).toBe("BITCHASSNIGGA");
});
