import { render, screen } from "@testing-library/react";

import Home from "./";

describe("Home", () => {
  it("renders Home component", () => {
    render(<Home />);
    // 있다는 것을 확신하기 위해서
    screen.debug();
  });
});
