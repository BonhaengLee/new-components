import { render, screen } from "@testing-library/react";

import Home from "./";

describe("Home", () => {
  it("renders Home component", () => {
    render(<Home />);

    screen.getByText("Searhc");
  });
});
