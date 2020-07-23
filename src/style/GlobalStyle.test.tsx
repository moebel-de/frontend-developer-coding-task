import React from "react";
import { render } from "@testing-library/react";

import "jest-styled-components";
import { GlobalStyle } from "./GlobalStyle";

describe("Background", () => {
  test("test warm background", () => {
    render(<GlobalStyle />);
    const styleTags = document.head.getElementsByTagName("style");
    expect(styleTags);
    expect(document.head).toMatchSnapshot();
  });
});
