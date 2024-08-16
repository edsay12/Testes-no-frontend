import { vi } from "vitest";
import Dashboard from "./Dashboard";
import { render, screen } from "@testing-library/react";
import PokeApiData from "../../services/PokeApiData";

const mockApiData = vi.fn(PokeApiData).mockImplementation(async () => {
  return [
    {
      id: "1",
      image: "asd",
      name: "Charmander",
      type: "Fogo",
    },
    {
      id: "1",
      image: "asd",
      name: "Charmander",
      type: "Fogo",
    },
  ];
});

describe("test dashboard component", () => {
  test("should have a list with 10 itens", async () => {
    render(<Dashboard pokeData={mockApiData} />);
    const itens = await screen.findAllByRole("listitem");
    expect(itens).toHaveLength(2);
  });
});
