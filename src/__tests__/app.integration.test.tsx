import React from "react";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import App from "../App";

test("Showing loader after clearing search input exciting value and submit the field with a new value", () => {
  const CITY = "Paris";

  render(<App />);

  const searchInput = screen.getByTestId("city-search-input");
  const searchBtn = screen.getByTestId("city-search-submit-btn");

  user.clear(searchInput);
  user.type(searchInput, CITY);
  user.click(searchBtn);
  expect(searchInput).toHaveValue(CITY);
  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
