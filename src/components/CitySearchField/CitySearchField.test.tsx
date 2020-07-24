import React, { useState } from "react";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import CitySearchField from "./CitySearchField";

const INITIAL_VALUE = "Hamburg";
const NEXT_VALUE = "Paris";

const ContainerComponent = () => {
  const [value, setValue] = useState(INITIAL_VALUE);

  return (
    <CitySearchField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onSearch={() => {}}
    />
  );
};

test("Should clear exsiting value and enter Paris", async () => {
  render(<ContainerComponent />);

  const $input = screen.getByTestId("city-search-input");
  const $submitButton = screen.getByTestId("city-search-submit-btn");

  expect($input).toHaveValue(INITIAL_VALUE);
  expect($submitButton).toHaveAttribute("type", "submit");
  expect(screen.getByTestId("city-search-arrow-icon")).toBeInTheDocument();

  user.clear($input);
  user.type($input, NEXT_VALUE);

  expect($input).toHaveValue(NEXT_VALUE);
});
