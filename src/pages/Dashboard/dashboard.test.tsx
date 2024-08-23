import { vi } from "vitest";
import Dashboard from "./Dashboard";
import { fireEvent, render, screen } from "@testing-library/react";
import {PokeApiData} from "../../services/PokeApiData";

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
      name: "Charmander2",
      type: "Fogo",
    },
  ];
});
const navigationMock = vi.fn()
describe("test dashboard component", () => {
  vi.mock('react-router-dom', () => ({
    useNavigate() {
        return navigationMock
    },
    Link: vi.fn().mockImplementation((props)=> props.children)
}))


  test("should have a list with 10 itens", async () => {
    render(<Dashboard pokeData={mockApiData} />);
    const itens = await screen.findAllByRole("listitem");
    expect(itens).toHaveLength(2);
  });
  test("li shold rediret to other page when clicked", async () => {
    render(<Dashboard pokeData={mockApiData} />);
    const itens = await screen.findByText("Charmander")
    fireEvent.click(itens)
    expect(navigationMock).toHaveBeenCalledTimes(1)
  });
});
