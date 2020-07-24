import React from "react";
import { render, screen } from "@testing-library/react";

import AppBackground from "./AppBackground";

describe("<AppBackground />", () => {
  test("should render the hot background", () => {
    render(<AppBackground temperature={20}>So Hot</AppBackground>);

    expect(screen.getByTestId("app-background")).toHaveAttribute("type", "hot");
  });

  test("should render the cold background", () => {
    render(<AppBackground temperature={10}>So Cold</AppBackground>);

    expect(screen.getByTestId("app-background")).toHaveAttribute(
      "type",
      "cold"
    );
  });
});
