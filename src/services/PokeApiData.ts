import { PokeType } from "../types";

async function PokeApiData(): Promise<PokeType[]> {
  const response = await fetch("http://localhost:3000/pokemon");
  const data = response.json();
  return data;
}

export default PokeApiData;
