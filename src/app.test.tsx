import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test app component", () => {
  test("should have a title on the page", async () => {
    render(<App />);

    const title = await screen.findByRole("heading");

    expect(title).toBeInTheDocument();
  });
});
