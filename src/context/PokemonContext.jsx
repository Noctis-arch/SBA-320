import { createContext, useState } from "react";

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  return (
    <PokemonContext.Provider
      value={{ favorites, setFavorites }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;