const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon(name) {
  const response = await fetch(`${BASE_URL}/${name.toLowerCase()}`);

  if (!response.ok) {
    throw new Error("Pokemon not found");
  }

  const data = await response.json();
  return data;
}