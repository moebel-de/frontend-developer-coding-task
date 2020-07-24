import React from "react";
import { render } from "@testing-library/react";

import WeatherIcon from "./WeatherIcon";
import { ErrorBoundary } from "../ErrorBoundary";

const Bomb = () => (
  <ErrorBoundary>
    <WeatherIcon id="1" iconId={800} title="" description="sunny" />
  </ErrorBoundary>
);

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});

describe("<WeatherIcon />", () => {
  test("should return an empty dom element for an icon with an invalid path", () => {
    const { container } = render(
      <WeatherIcon id="1" iconId={1} title="Rain" description="Shower" />
    );

    expect(container).toBeEmptyDOMElement();
  });

  test("should throw an error when hasn't a title prop but has a description", () => {
    const { container } = render(<Bomb />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <h1>
          Something went wrong.
        </h1>
      </div>
    `);
    expect(console.error).toHaveBeenCalledTimes(3);
  });
});
