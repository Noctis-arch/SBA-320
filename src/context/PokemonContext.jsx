import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");

  return savedFavorites ? JSON.parse(savedFavorites) : [];
});

  return (
    <PokemonContext.Provider
      value={{ favorites, setFavorites }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;