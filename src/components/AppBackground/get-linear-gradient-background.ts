import { css } from "styled-components";

import { Gradient } from "./types";

export function getLinearGradientBackground(gradient: Gradient) {
  return css`
    background: linear-gradient(
      -180deg,
      ${gradient.top} 0%,
      ${gradient.bottom} 100%
    );
  `;
}
