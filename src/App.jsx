import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { fetchPokemon } from "./services/api";

function App() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);

  async function handleSearch() {
    if (!search.trim()) return;

    try {
      const data = await fetchPokemon(search);
      setPokemon(data);
      setSearch("");
    } catch (error) {
      console.error(error);
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

        {pokemon ? (
          <h2 className="welcome-title">
            {pokemon.name.toUpperCase()} loaded successfully!
          </h2>
        ) : (
          <h2 className="welcome-title">
            Search for any Pokémon to begin!
          </h2>
        )}
      </main>
    </>
  );
}

export default App;