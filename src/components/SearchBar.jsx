function SearchBar() {
  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Search for a Pokémon..."
      />

      <button>Search</button>
    </section>
  );
}

export default SearchBar;