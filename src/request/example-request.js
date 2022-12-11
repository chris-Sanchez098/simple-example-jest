const checkResponseApi = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
};

const getPokemonName = async (name) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
};

module.exports = { checkResponseApi, getPokemonName };
