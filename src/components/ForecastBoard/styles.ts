import styled from "styled-components";

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

  @media (min-width: 480px) {
    max-width: 360px;
  }
`;
