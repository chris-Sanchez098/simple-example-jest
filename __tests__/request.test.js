const {
  getPokemonName,
  checkResponseApi,
} = require("../src/request/example-request");

describe("checkResponseApi", () => {
  test("check response pokemon API", async () => {
    checkResponseApi().then((data) => {
      expect(data.status).toBe(200);
    });
  });
});

describe("getPokemonName", () => {
  test("the data is pokemon ditto", async () => {
    getPokemonName("ditto").then((data) => {
      res = data.json();
      res.then((pok) => {
        expect(pok.name).toBe("ditto");
      });
    });
  });
});
