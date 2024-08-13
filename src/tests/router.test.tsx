import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainRoutes from "../routes";

describe("Testa o component MainRoutes", () => {
  test("Deve renderizar a página de login", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = screen.getByText("Hello World");

    expect(title).toBeInTheDocument();
  });

  test("Deve renderizar a página de dashboard", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = await screen.findByRole("heading", {
      name: "Dashboard",
    });

    expect(title).toBeInTheDocument();
  });

 
  test("Deve renderizar a página de 404", async () => {
    render(
      <MemoryRouter initialEntries={["/rotaqualquer"]}>
        <MainRoutes />
      </MemoryRouter>
    );

    const title = screen.getByRole("heading",{
        level:1
    });

    expect(title).toBeInTheDocument();
  });
});