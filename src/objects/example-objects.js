const { cons, first, rest, isEmpty } = require("functional-light");

const cancion1 = {
  name: "november rain",
  album: "Use Your Illusion I",
  artist: "Guns And Roses",
  time: 536,
  stars: 5,
};
const cancion2 = {
  name: "Feel Good Inc",
  album: "Demon Days",
  artist: "Gorillaz",
  time: 300,
  stars: 5,
};
const cancion3 = {
  name: "detroit rock city",
  album: "Destroyer",
  artist: "Kiss",
  time: 215,
  stars: 4,
};
const cancion4 = {
  name: "Ride",
  album: "Blurryface",
  artist: "Twenty One Pilots",
  time: 214,
  stars: 4,
};
const cancion5 = {
  name: "My Blood",
  album: "Trench",
  artist: "Twenty One Pilots",
  time: 229,
  stars: 1,
};

const music = [cancion1, cancion2, cancion3, cancion4, cancion5];

/**
 * Retorna una canción dando su nombre, sino existe un vacio. La canción será buscada siempre en 'playlist'.
 * @param {string} name
 * @param {array} playlist
 * @returns {object}
 * @example findSongName('Smells Like Teen Spirit',music) // => []
 */
const findSongName = (name, playlist) => {
  if (isEmpty(playlist)) {
    return [];
  } else if (first(playlist).name == name) {
    return first(playlist);
  } else {
    return findSongName(name, rest(playlist));
  }
};

/**
 * Retorna una canción dando el nombre de su artista, sino existe un vacio. La canción será buscada siempre en 'playlist'
 * @param {string} art
 * @param {list} playlist
 * @returns {Array}
 * @example findSongArt('Twenty One Pilots',music) // => [{ name: 'Ride', album: 'Blurryface',artist: 'Twenty One Pilots',time: 214,stars: 4 },{ name: 'My Blood',album: 'Trench',artist: 'Twenty One Pilots',time: 229,stars: 3 }]
 * @example findSongArt('Red Hot Chili Peppers',music) // => []
 */

const findSongArt = (artist, playlist) => {
  if (isEmpty(playlist)) {
    return [];
  } else if (first(playlist).artist == artist) {
    return cons(first(playlist), findSongArt(artist, rest(playlist)));
  } else {
    return findSongArt(artist, rest(playlist));
  }
};

// #4
/**
 * Retorna las canciones que tengan al menos 2 estrellas.
 * @param {array} playlist
 * @returns {array}
 * @example twoStar(music) // => [ { name: My Blood,album: Trench, artist: Twenty One Pilots,time: 229,stars: 1 } ]
 */
const twoStar = (playlist) => {
  if (isEmpty(playlist)) {
    return [];
  } else if (first(playlist).stars < 2) {
    return cons(first(playlist), twoStar(rest(playlist)));
  } else {
    return twoStar(rest(playlist));
  }
};

/**
* Retorna los titulos de canciones y su duración de una playlist
* @param {array} playlist
* @returns {array}
* @example titleAndTime (music) // => [ { name: 'november rain', time: 536 },
 { name: 'Feel Good Inc', time: 300 },
 { name: 'detroit rock city', time: 215 },       
 { name: 'Ride', time: 214 },findSongName
 { name: 'My Blood', time: 229 },]
*/
const titleAndTime = (playlist) => {
  if (isEmpty(playlist)) {
    return [];
  } else {
    return cons(
      { name: first(playlist).name, time: first(playlist).time },
      titleAndTime(rest(playlist))
    );
  }
};

module.exports = { findSongName, findSongArt, twoStar, titleAndTime, music };
