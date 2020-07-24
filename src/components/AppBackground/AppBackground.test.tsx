import React from "react";
import { render, screen } from "@testing-library/react";

import AppBackground from "./AppBackground";

test("should render the hot background", () => {
  render(<AppBackground temperature={20}>So Hot</AppBackground>);

  expect(screen.getByTestId("app-background")).toHaveAttribute("type", "hot");
});
