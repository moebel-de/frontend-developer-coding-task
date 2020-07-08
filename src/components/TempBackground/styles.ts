import styled, { css } from 'styled-components';

export enum BackgroundColors {
  cold = 'cold',
  hot = 'hot',
}

const colors = {
  [BackgroundColors.hot]: css`
    background: linear-gradient(
      -180deg,
      rgb(247, 191, 176) 0%,
      rgb(223, 210, 127) 100%
    );
  `,
  [BackgroundColors.cold]: css`
    background: linear-gradient(
      -180deg,
      rgb(176, 247, 220) 0%,
      rgb(223, 210, 127) 100%
    );
  `,
};

type ContainerProps = {
  temp: BackgroundColors;
};

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  ${({ temp }) => colors[temp]};
`;
