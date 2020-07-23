import React from "react";
import { render, screen } from "@testing-library/react";
import { BackgroundContainer } from ".";
import { coldBackground, warmBackground } from "./style";
import "jest-styled-components";

describe("Background", () => {
  test("test warm background", () => {
    const { container } = render(
      <BackgroundContainer temperatur={20}>Test</BackgroundContainer>,
    );

    expect(container.firstChild).toHaveStyleRule("background", warmBackground);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
  test("test cold background", () => {
    const { container } = render(
      <BackgroundContainer temperatur={10}>Test</BackgroundContainer>,
    );

    expect(container.firstChild).toHaveStyleRule("background", coldBackground);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
