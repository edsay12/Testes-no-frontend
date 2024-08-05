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

    test("should have a button on the screen", async () => {
        render(<Login />)
        const button = await screen.findByRole("button")
        expect(button.textContent).toBe("Enviar")
    })

    test("should input to email", async () => {
        render(<Login />)
        const input = await screen.findByPlaceholderText("Insira seu email")
        expect(input).toBeInTheDocument()
    })
    test("should input to senha", async () => {
        render(<Login />)
        const input = await screen.findByPlaceholderText("Insira sua senha")
        expect(input).toBeInTheDocument()
    })
})