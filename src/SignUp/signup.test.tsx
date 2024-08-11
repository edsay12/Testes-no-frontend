import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "./SignUp";
import { vi } from "vitest";

const navigationMock = vi.fn();

describe("signup page test", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigationMock;
    },
  }));

  test("should have a title called SignUp", async () => {
    render(<SignUp />);
    const title = await screen.findByRole("heading", {
      name: "SignUp",
    });
    expect(title).toBeInTheDocument();
  });

  test("should have three input on the screen", async () => {
    render(<SignUp />);
    const inputs = await screen.findAllByRole("textbox");

    expect(inputs.length).toBe(3);
  });

  test("should have a input to email", async () => {
    render(<SignUp />);
    const input = await screen.findByPlaceholderText("email");

    expect(input).toBeInTheDocument();
  });
  test("should have a input to senha", async () => {
    render(<SignUp />);
    const input = await screen.findByPlaceholderText("senha");

    expect(input).toBeInTheDocument();
  });
  test("should have a input to nome", async () => {
    render(<SignUp />);
    const input = await screen.findByPlaceholderText("nome");

    expect(input).toBeInTheDocument();
  });
  test("should have a button", async () => {
    render(<SignUp />);
    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Entrar");
  });

  test("shold navigate to login page", async () => {
    render(<SignUp />);
    const button = await screen.findByRole("button");
    fireEvent.click(button);
    expect(navigationMock).toHaveBeenCalledTimes(1);
  });
});
