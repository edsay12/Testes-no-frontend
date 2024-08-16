import { PokeType } from "../types";

export async function PokeApiData(): Promise<PokeType[]> {
  const response = await fetch("http://localhost:3000/pokemon");
  const data = response.json();
  return data;
}

export async function FetchPokeDetail(id: string) {
  const response = await fetch(`http://localhost:3000/pokemon/${id}`)
  const data = response.json()
  return data
}
