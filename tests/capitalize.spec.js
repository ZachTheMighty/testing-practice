import capitalize from "../functions/capitalize.js";

test("capitalize all lowercase", () => {
  expect(capitalize("bitchassnigga")).toBe("Bitchassnigga");
});
