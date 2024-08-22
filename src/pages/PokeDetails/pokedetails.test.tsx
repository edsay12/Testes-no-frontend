import { FetchPokeDetail } from "../../services/PokeApiData";
import PokeDetails from "./pokeDetails"
import { vi } from "vitest";
import { render, screen } from "@testing-library/react"
import { useParams } from "react-router-dom";





const mockApiData = vi.fn(FetchPokeDetail).mockImplementation(async () => {
    return {
        id: "1",
        image: "asd",
        name: "Charmander",
        type: "Fogo",
    }

});



describe("shold teste pokedetails page", () => {
    vi.mock("react-router-dom", () => {
        return {
            useParams: () => ({
                id: 1
            }),
            Link: vi.fn().mockImplementation((props) => props.children)
        }
    })

    render(<PokeDetails FetchPokeDetail={mockApiData} />)
    test("shold have a title in the page", async () => {
        const title = await screen.findByText("Charmander")
        expect(title).toBeInTheDocument()

    })
})