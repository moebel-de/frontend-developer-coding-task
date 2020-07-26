import fetch from "jest-fetch-mock";
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import "jest-styled-components";
import { WeatherSearch } from "./WeatherSearch";
import { testData } from "../components/WeatherList/testData";

describe("WeatherSearch", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("test WeatherSearch", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData), { status: 200 });
    const onTempChange = jest.fn(() => {});
    await act(async () => {
      render(<WeatherSearch onTempChange={onTempChange} />);
    });
    expect(onTempChange).toBeCalledWith(testData.list[0].temp.day);
    expect(onTempChange).toBeCalledTimes(1);
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
  });
  test("test WeatherSearch city not found", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData), { status: 404 });
    const onTempChange = jest.fn(() => {});
    await act(async () => {
      render(<WeatherSearch onTempChange={onTempChange} />);
    });
    expect(onTempChange).toBeCalledTimes(0);
  });
  test("test WeatherSearch unauthorized", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData), { status: 401 });
    const onTempChange = jest.fn(() => {});
    await act(async () => {
      render(<WeatherSearch onTempChange={onTempChange} />);
    });
    expect(onTempChange).toBeCalledTimes(0);
  });
  test("test WeatherSearch unexpected Error", async () => {
    fetch.mockRejectOnce(new Error("unexpected"));
    const onTempChange = jest.fn(() => {});
    await act(async () => {
      render(<WeatherSearch onTempChange={onTempChange} />);
    });
    expect(onTempChange).toBeCalledTimes(0);
    expect(screen.getByText("something went wrong")).toBeInTheDocument();
  });
  test("test WeatherSearch onchange", async () => {
    fetch.mockResponseOnce(JSON.stringify(testData), { status: 200 });
    const onTempChange = jest.fn(() => {});
    await act(async () => {
      render(<WeatherSearch onTempChange={onTempChange} />);
    });
    expect(onTempChange).toBeCalledTimes(1);
    const input = screen.getByRole("textbox");
    const city = "Berlin";
    fetch.mockResponseOnce(JSON.stringify(testData), { status: 404 });
    await act(async () => {
      fireEvent.change(input, { target: { value: city } });
    });
    await act(async () => {
      fireEvent.keyPress(input, { charCode: 13 });
    });
    expect(screen.getByText("Berlin not found")).toBeInTheDocument();
  });
});
