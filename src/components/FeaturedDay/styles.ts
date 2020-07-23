import styled from "styled-components";

export const Container = styled.div`
  color: rgb(43, 18, 2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`;

export const Temperature = styled.span`
  font-size: 6.25rem;
  font-weight: 900;
  margin-left: 1rem;

  &:after {
    content: "°";
  }
`;
