import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"
import { vi } from "vitest";


const navigationMock = vi.fn()

describe("login page tester", () => {
    vi.mock('react-router-dom', () => ({
        useNavigate() {
            return navigationMock
        },
        Link: vi.fn().mockImplementation((props)=> props.children)
    }))

    

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

    test("should input to senha", async () => {
        render(<Login />)
        const button = await screen.findByRole("button")
        fireEvent.click(button)
        expect(navigationMock).toHaveBeenCalledTimes(1)
    })

   
})