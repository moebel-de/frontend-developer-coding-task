import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders App component", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("img")).toBeInTheDocument();
  });
});
