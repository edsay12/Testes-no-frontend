import { render, screen } from "@testing-library/react"
import Login from "./Login"

describe("login page tester", () => {
    test("should have a h1 with Hello World", async () => {
        render(<Login />)
        const text = await screen.findByRole("heading", {
            name: "Hello World"
        })
        expect(text).toBeInTheDocument()

    })

    test("should have two inputs", async () => {
        render(<Login />)
        const inputs = await screen.findAllByRole("textbox")
        expect(inputs).toHaveLength(2)
    })
})