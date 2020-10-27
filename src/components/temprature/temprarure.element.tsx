import styled from "styled-components";

interface fontSize {
  size: string;
}
export const Content = styled.div`
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

export const Digit = styled.p`
  font-size: ${({ size }: fontSize) => {
    return size;
  }};
`;
export const Degree = styled.div`
  margin-top: -60px;
  margin-left: -60px;
`;
