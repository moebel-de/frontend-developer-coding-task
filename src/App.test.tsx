import fetch from "jest-fetch-mock";
import React from "react";
import { render, act } from "@testing-library/react";
import App from "./App";
import { testData } from "./components/WeatherList/testData";

describe("App", () => {
  test("renders App component", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData), { status: 200 });
    await act(async () => {
      const { getByText } = render(<App />);
      expect(getByText("logo.svg")).toBeInTheDocument();
      expect(getByText("whatweather?")).toBeInTheDocument();
    });
  });
});
