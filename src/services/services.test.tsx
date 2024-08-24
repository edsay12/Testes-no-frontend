import { PokeType } from "../types";
import { FetchPokeDetail, PokeApiData } from "./PokeApiData";
import { vi } from "vitest";

globalThis.fetch = vi.fn();

function createFetchResponse(data: any) {
  return {
    json: () => new Promise((resolve) => resolve(data)),
  };
}

describe("should test pokemonservice", () => {
  test("check if it was done a get to correct url", async () => {
    const pokemonListResponse: PokeType[] = [
      {
        id: "1",
        image: "asd",
        name: "Charmander",
        type: "Fogo",
      },
      {
        id: "2",
        image: "asd",
        name: "Charmander",
        type: "Fogo",
      },
    ];

    fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));

    const pokemonList = await PokeApiData();

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon");
  });

  test("check if get was done with the correct url and id", () => {
    const id = "1";

    const pokemonGetResponse: PokeType = {
      id: id,
      image: "asd",
      name: "Charmander",
      type: "Fogo",
    };

    fetch.mockResolvedValue(createFetchResponse(pokemonGetResponse));

    const pokeResponse = FetchPokeDetail(id);
    expect(fetch).toHaveBeenCalledWith(`http://localhost:3000/pokemon/${id}`);
  });
});
