import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function removeFavorite(id) {
    setFavorites(favorites.filter((pokemon) => pokemon.id !== id));
  }

  return (
    <PokemonContext.Provider
      value={{
        favorites,
        setFavorites,
        removeFavorite,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;