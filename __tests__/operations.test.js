const {
  sum,
  sustration,
  multiplication,
  division,
} = require("../src/operations/operations");

describe("Addition", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Sustration", () => {
  test("subtracting 5 - 2 is equal to 3", () => {
    expect(sustration(5, 2)).toBe(3);
  });
});

describe("Multiplication", () => {
  test("multiplication 10 * 9 is equal to 90", () => {
    expect(multiplication(10, 9)).toBe(90);
  });
});

describe("Division", () => {
  test("division 60 / 3 is equal to 20", () => {
    expect(division(60, 3)).toBe(20);
  });
});
