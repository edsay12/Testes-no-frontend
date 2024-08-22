import { useEffect, useState } from "react";
import { PokeType } from "../../types";
import { useNavigate } from "react-router-dom";

interface props {
  pokeData: () => Promise<PokeType[]>;
}

export default function Dashboard({ pokeData }: props) {
  const navigate = useNavigate()
  const [pokemons, setPokemons] = useState<PokeType[]>([]);
  

  useEffect(() => {
    (async () => {
      const data = await pokeData();
      setPokemons(data);
    })();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <ul>
        {pokemons.map((poke) => {
          return (

            <li key={poke.id} onClick={()=> navigate(`/pokemonDetails/${poke.id}`)}>
              =
              <strong>{poke.type}</strong>
              <h2>{poke.name}</h2>
              <img src={poke.image} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
