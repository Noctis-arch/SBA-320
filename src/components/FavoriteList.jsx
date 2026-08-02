import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

function FavoriteList() {
  const { favorites } = useContext(PokemonContext);

  return (
    <section className="favorites">
      <h2>Favorite Pokémon</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FavoriteList;