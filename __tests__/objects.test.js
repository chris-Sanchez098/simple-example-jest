const {
  findSongName,
  findSongArt,
  twoStar,
  titleAndTime,
  music,
} = require("../src/objects/example-objects");

describe("findSongName", () => {
  test('search the song "Ruhtless" to playlist => []', () => {
    expect(findSongName("Ruhtless", music)).toStrictEqual([]);
  });
});

describe("findSongArt", () => {
  test("findSongArt to Twenty One Pilots => [ {name:Ride,album:Blurryface,artist:Twenty One Pilots,time:214,stars: 4 },{ name:My Blood,album:Trench,artist:Twenty One Pilots,time: 229,stars:3}]", () => {
    expect(findSongArt("Twenty One Pilots", music)).toStrictEqual([
      {
        name: "Ride",
        album: "Blurryface",
        artist: "Twenty One Pilots",
        time: 214,
        stars: 4,
      },
      {
        name: "My Blood",
        album: "Trench",
        artist: "Twenty One Pilots",
        time: 229,
        stars: 1,
      },
    ]);
  });
});

describe("findSongArt", () => {
  test("findSongArt to residente => []", () => {
    expect(findSongArt("residente", music)).toStrictEqual([]);
  });
});

describe("twoStar", () => {
  test("twoStar of the music (playlist) => [ { name: My Blood,album: Trench, artist: Twenty One Pilots,time: 229,stars: 1 } ]", () => {
    expect(twoStar(music)).toStrictEqual([
      {
        name: "My Blood",
        album: "Trench",
        artist: "Twenty One Pilots",
        time: 229,
        stars: 1,
      },
    ]);
  });
});

describe("titleAndTime", () => {
  test("titleAndTime of the music (playlist) => [ { name: november rain, time: 536 },{ name: Feel Good Inc, time: 300 },{ name: detroit rock city, time: 215 },{ name: Ride, time: 214 },{ name: My Blood, time: 229 }", () => {
    expect(titleAndTime(music)).toStrictEqual([
      { name: "november rain", time: 536 },
      { name: "Feel Good Inc", time: 300 },
      { name: "detroit rock city", time: 215 },
      { name: "Ride", time: 214 },
      { name: "My Blood", time: 229 },
    ]);
  });
});
