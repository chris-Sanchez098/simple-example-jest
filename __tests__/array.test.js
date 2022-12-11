const {
  sumList,
  findElement,
  reverseList,
} = require("../src/arrays/example-arrays");

const lista1 = [1, 2, 3, 4, 5, 6, 7];
const lista2 = [9, 8, 6, 2, "d", "c", "p"];
const lista3 = ["a", "b", 1, 2, 3, "hola"];
const lista4 = ["d", "5", "f"];

describe("SumList", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sumList(lista1)).toBe(28);
  });
});

describe("findElement", () => {
  test("findElement to 1, lista2  => false", () => {
    expect(findElement(1, lista2)).toBe(false);
  });
});

describe("findElement", () => {
  test("findElement to d, lista4  => d", () => {
    expect(findElement("d", lista4)).toMatch("d");
  });
});

describe("reverseList", () => {
  test("reverseList to lista1 => [ 7, 6, 5, 4, 3, 2, 1 ]", () => {
    expect(reverseList(lista1)).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);
  });
});

test("reverseList to lista3 => [hola,3,2,1,b,a]", () => {
  expect(reverseList(lista3)).toStrictEqual(["hola", 3, 2, 1, "b", "a"]);
});
