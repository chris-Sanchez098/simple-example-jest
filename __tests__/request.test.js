const {
  getPokemonName,
  checkResponseApi,
} = require("../src/request/example-request");

describe("checkResponseApi", () => {
  test("Other", async () => {
    checkResponseApi().then((data) => {
      expect(data).resolve();
    });
  });
});

describe("getPokemonName", () => {
  test("the data is peanut butter", async () => {
    getPokemonName("ditto").then((data) => {
      res = data.json();
      res.then((pok) => {
        expect(pok.name).toBe("ditto");
      });
    });
  });
});
