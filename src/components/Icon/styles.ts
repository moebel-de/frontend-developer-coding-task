import styled from 'styled-components';

export interface ImageStyleProps {
  size?: string;
}

export const Image = styled.img<ImageStyleProps>`
  width: ${(props) => props.size}px;
`;
