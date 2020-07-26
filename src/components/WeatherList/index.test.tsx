import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { WeatherList } from ".";
import "jest-styled-components";
import { testData as data } from "./testData";
import { WeatherData } from "../../types";
const testData = data.list;

describe("WeatherList", () => {
  test("test WeatherList without blur", () => {
    const { container } = render(<WeatherList data={testData} />);
    expect(container).toMatchSnapshot();
    expect(container).toBeInTheDocument();
    expect(container.firstChild).not.toHaveStyleRule("filter", "blur(8px)");
  });
  test("test WeatherList loading", () => {
    const { getByText } = render(<WeatherList loading />);

    expect(getByText("Loading...")).toBeInTheDocument();
  });
  test("test WeatherList with blur", () => {
    const { container } = render(<WeatherList data={testData} isBlurred />);
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule("filter", "blur(8px)");
  });
  test("test WeatherList empty data", () => {
    const data: WeatherData[] = [];
    const { container } = render(<WeatherList data={data} isBlurred />);

    expect(container.firstChild).toBeNull();
  });
  test("test WeatherList empty data", () => {
    const data: WeatherData[] = [];
    const { container } = render(<WeatherList data={data} isBlurred />);

    expect(container.firstChild).toBeNull();
  });
  test("test WeatherList empty data", () => {
    const data: WeatherData[] = [];

    const errorMessage = "WhateverErrorText";
    const { container } = render(
      <WeatherList errorMessage={errorMessage} data={data} isBlurred />,
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(container.firstChild).toBeInTheDocument();
  });
  test("test WeatherList click more", () => {
    const {
      container: { firstChild },
    } = render(<WeatherList data={testData} isBlurred />);
    expect(firstChild?.childNodes.length).toBe(6);

    expect(screen.getByText(/more/)).toBeDefined();
    fireEvent.click(firstChild?.lastChild!!);
    expect(firstChild?.childNodes.length).toBe(17);
    expect(screen.getByText(/less/)).toBeDefined();
  });
});
