import styled from "styled-components";

import { device } from "../../shared/device";

interface WrapperProps {
  isBlurred: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  transition: filter 220ms ease-in;
  filter: ${(props) => (props.isBlurred ? "blur(12px)" : "blur(0)")};
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.25em;

  @media ${device.mobileLarge} {
    max-width: 360px;
  }
`;
