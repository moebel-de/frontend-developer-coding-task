import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { CitySearchField } from ".";
import "jest-styled-components";

const initValue = "Berlin";

describe("Background", () => {
  test("test init value", () => {
    const onSubmit = jest.fn(() => {});
    const setFocus = jest.fn(() => {});
    const onChange = jest.fn(() => {});

    const { container } = render(
      <CitySearchField
        value={initValue}
        onChange={onChange}
        setFocus={setFocus}
        onSubmit={onSubmit}
      />,
    );
    expect(container).toBeInTheDocument();

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe(initValue);
  });
  test("test onChange", () => {
    const onSubmit = jest.fn(() => {});
    const setFocus = jest.fn(() => {});
    const onChange = jest.fn(() => {});
    render(
      <CitySearchField
        value={initValue}
        onChange={onChange}
        setFocus={setFocus}
        onSubmit={onSubmit}
      />,
    );

    const input = screen.getByRole("textbox") as HTMLInputElement;

    const testValue = "test";

    fireEvent.change(input, {
      target: { value: testValue },
    });
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).lastCalledWith(testValue);
  });

  test("test setFocus", () => {
    const onSubmit = jest.fn(() => {});
    const setFocus = jest.fn(() => {});
    const onChange = jest.fn(() => {});
    render(
      <CitySearchField
        value={initValue}
        onChange={onChange}
        setFocus={setFocus}
        onSubmit={onSubmit}
      />,
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.focus(input);
    expect(setFocus).toBeCalled();
    expect(setFocus).lastCalledWith(true);

    fireEvent.blur(input);
    expect(setFocus).toBeCalled();
    expect(setFocus).lastCalledWith(false);
    expect(setFocus).toBeCalledTimes(2);
  });
  test("test onSubmit", () => {
    const onSubmit = jest.fn(() => {});
    const setFocus = jest.fn(() => {});
    const onChange = jest.fn(() => {});
    render(
      <CitySearchField
        value={initValue}
        onChange={onChange}
        setFocus={setFocus}
        onSubmit={onSubmit}
      />,
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.keyPress(input, {
      charCode: 115,
    });
    fireEvent.keyPress(input, {
      charCode: 13,
    });
    expect(onSubmit).toBeCalledTimes(1);
    expect(setFocus).toBeCalledTimes(1);
    expect(setFocus).toBeCalledWith(true);
  });
});
