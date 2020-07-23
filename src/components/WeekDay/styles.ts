import styled from "styled-components";

export const Container = styled.div`
  color: rgb(43, 18, 2);
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 1.25rem;
`;

export const Temperature = styled.span`
  margin-right: 2em;

  &:after {
    content: "°";
  }
`;

export const Day = styled.span`
  flex: 2 1 0%;
`;
