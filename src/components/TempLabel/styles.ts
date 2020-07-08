import styled, { css } from 'styled-components';

export enum Size {
  big = 'big',
  normal = 'normal',
}

const sizes = {
  [Size.big]: css`
    font-size: 100px;
    font-weight: 900;
  `,
  [Size.normal]: css`
    font-size: 20px;
    font-weight: 400;
  `,
};

type LabelProps = {
  size: Size;
};

export const Label = styled.div<LabelProps>`
  ${({ size }) => sizes[size]};
`;
