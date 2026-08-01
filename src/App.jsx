import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <SearchBar />

        <h2 className="welcome-title">
          Search for any Pokémon to begin!
        </h2>
      </main>
    </>
  );
}

export default App;