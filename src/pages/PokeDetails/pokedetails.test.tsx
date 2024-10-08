import { render, screen } from "@testing-library/react";
import PokeDetails from "./pokeDetails";
import { FetchPokeDetail } from "../../services/PokeApiData";
import { vi } from "vitest";
import * as rrd from "react-router-dom";

const mockapidatapokedetais = vi
  .fn(FetchPokeDetail)
  .mockImplementation(async () => {
    return {
      id: "1",
      image: "asd",
      name: "Charmander",
      type: "Fogo",
    };
  });

describe("shold test pokedetaispage", () => {
  vi.mock("react-router-dom", () => ({
    useParams: () => ({
      id: 1,
    }),

    Link: vi.fn().mockImplementation((props) => props.children),
  }));

  test("should test pokeapidetais fetch function", async () => {
    render(<PokeDetails FetchPokeDetail={mockapidatapokedetais} />);
    const heading = await screen.findByText("Charmander");
    expect(heading).toBeInTheDocument();
  });

  test("should valid if dont have params id ", async () => {
    vi.spyOn(rrd, "useParams").mockImplementation(() => ({ id: "0" }));
    render(<PokeDetails FetchPokeDetail={mockapidatapokedetais} />);
    const errotest = await screen.findByText("O id não e valido");
    expect(errotest).toBeInTheDocument();
  });
});
