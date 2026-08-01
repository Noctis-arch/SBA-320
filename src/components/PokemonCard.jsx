function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <h2>{pokemon.name.toUpperCase()}</h2>

      <p>
        <strong>Height:</strong> {pokemon.height}
      </p>

      <p>
        <strong>Weight:</strong> {pokemon.weight}
      </p>
    </div>
  );
}

export default PokemonCard;