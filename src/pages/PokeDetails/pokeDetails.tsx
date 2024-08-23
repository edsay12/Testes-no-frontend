import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PokeType } from "../../types";

interface PokeDatailsProps {
  FetchPokeDetail: (id: string) => Promise<PokeType>;
}
export default function PokeDetails({ FetchPokeDetail }: PokeDatailsProps) {
  const params = useParams();
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState<PokeType>({
    id: "",
    image: "",
    name: "",
    type: "",
  });

  useEffect(() => {
    (async () => {
      setError("");
      if (!params.id || params.id === "0") {
        setError("O id não e valido");
        return;
      }
      const data = await FetchPokeDetail(params.id);
      setPokemon(data);
    })();
  });
  return (
    <div>
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <strong>{pokemon.type}</strong>
        <Link to={"/dashboard"} />
        {error && <strong>{error}</strong>}
      </div>
    </div>
  );
}
