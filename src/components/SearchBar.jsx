function SearchBar({ search, setSearch, handleSearch }) {
    return (
        <section className="search-section">
            <input
                type="text"
                placeholder="Search for a Pokémon..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />

            <button onClick={handleSearch}>
                Search
            </button>
        </section>
    );
}

export default SearchBar;