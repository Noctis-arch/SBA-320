import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

function FavoriteList() {
    const { favorites, removeFavorite } = useContext(PokemonContext);

    return (
        <section className="favorites">
            <h2>Favorite Pokémon</h2>

            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                <ul>
                    {favorites.map((pokemon) => (
                        <li key={pokemon.id}>
                            <img
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width="50"
                            />

                            <p>{pokemon.name.toUpperCase()}</p>

                            <button
                                onClick={() => removeFavorite(pokemon.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default FavoriteList;