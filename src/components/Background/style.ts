import styled, { css } from "styled-components";

export enum TempBackgroundColors {
  warm = "warm",
  cold = "cold",
}

export const warmBackground =
  "linear-gradient(-180deg,rgb(247,191,176) 0%,rgb(223,210,127) 100%)";
export const coldBackground =
  "linear-gradient(-180deg,rgb(176,247,220) 0%,rgb(223,210,127) 100%)";

const colors = {
  [TempBackgroundColors.warm]: css`
    background: ${warmBackground};
  `,
  [TempBackgroundColors.cold]: css`
    background: ${coldBackground};
  `,
};

type TempBackgroundContainerProps = {
  temp: TempBackgroundColors;
};

export const TempBackgroundContainer = styled.div<TempBackgroundContainerProps>`
  width: 100%;
  min-height: 100%;
  padding: 20px;
  box-sizing: border-box;
  ${({ temp }) => colors[temp]};
`;
