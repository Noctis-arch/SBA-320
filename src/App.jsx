import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import Loading from "./components/Loading";
import { fetchPokemon } from "./services/api";
import FavoriteList from "./components/FavoriteList";

function App() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!search.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await fetchPokemon(search);
      setPokemon(data);
      setSearch("");
    } catch (error) {
      setPokemon(null);
      setError("Pokemon not found.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main>
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />

        {loading ? (
          <Loading />
        ) : error ? (
          <h2 className="error-message">{error}</h2>
        ) : pokemon ? (
          <PokemonCard pokemon={pokemon} />
        ) : (
          <h2 className="welcome-title">
            Search for any Pokémon to begin!
          </h2>
        )}

        <FavoriteList />
      </main>
    </>
  );
}

export default App;