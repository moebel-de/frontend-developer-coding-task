import React from "react";
import { render } from "@testing-library/react";
import { WeatherIcon, getIconElement, DEFAULT_WEATHER_ICON_SIZE } from ".";
import "jest-styled-components";

const testSize = 300;
describe("Background", () => {
  test("test WeatherIcon", () => {
    // no Icon for wrong code
    const Icon = getIconElement("aehaeha");
    expect(Icon).toBeNull();

    const Icon2 = getIconElement("11d");
    expect(Icon2).toBeDefined();
    if (!Icon2) throw new Error();

    const { container } = render(<Icon2 />);
    expect(container.firstElementChild?.tagName).toBe("svg");
    expect(container.firstChild).toBeInTheDocument();
  });

  test("test WeatherIcon size " + testSize + " of element", () => {
    const { container } = render(
      <WeatherIcon code="01d" sizeInPx={testSize} />,
    );
    expect(container.firstChild).toHaveStyleRule("width", testSize + "px");
    expect(container.firstChild).toBeInTheDocument();
  });

  test("test WeatherIcon default size " + testSize + " of element", () => {
    const { container } = render(<WeatherIcon code="09d" />);
    expect(container.firstChild).toHaveStyleRule(
      "width",
      DEFAULT_WEATHER_ICON_SIZE + "px",
    );
  });

  test("test WeatherIcon null of wrong code", () => {
    const { container } = render(<WeatherIcon code="wrong" sizeInPx={300} />);
    expect(container.firstChild).toBeNull();
  });
});
