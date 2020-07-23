import styled from "styled-components";

import { palette } from "./palette";
import { Gradients } from "./types";
import { BackgroundType, BackgroundTypes } from "./types";
import { getLinearGradientBackground } from "./get-linear-gradient-background";

const gradients: Gradients = {
  [BackgroundTypes.hot]: {
    top: palette.salmon,
    bottom: palette.mustard,
  },
  [BackgroundTypes.cold]: {
    top: palette.emerald,
    bottom: palette.mustard,
  },
};

export const Background = styled.div<{ type: BackgroundType }>`
  min-height: 100vh;
  ${(props) => getLinearGradientBackground(gradients[props.type])};
`;
