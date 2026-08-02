import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

function PokemonCard({ pokemon }) {
  const { favorites, setFavorites } = useContext(PokemonContext);

  function addFavorite() {
    const alreadyExists = favorites.some(
      (fav) => fav.id === pokemon.id
    );

    if (!alreadyExists) {
      setFavorites([...favorites, pokemon]);
    }
  }

  return (
    <div className="pokemon-card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h2>{pokemon.name.toUpperCase()}</h2>

      <p>
        <strong>Type:</strong>{" "}
        {pokemon.types.map((type) => type.type.name).join(", ")}
      </p>

      <p>
        <strong>Height:</strong> {pokemon.height}
      </p>

      <p>
        <strong>Weight:</strong> {pokemon.weight}
      </p>

      <button onClick={addFavorite}>
        Add to Favorites
      </button>
    </div>
  );
}

export default PokemonCard;