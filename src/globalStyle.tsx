import styled, { createGlobalStyle } from "styled-components";

interface weather {
  temp: number;
}

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction:column

 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;

  position: absolute;
  background-color: ${({ temp }: weather) =>
    temp > 15 ? "#b5f2d1" : "#f5bfad"};
  background-image: ${({ temp }: weather) =>
    temp > 15
      ? "linear-gradient(180deg, #f5bfad 30%, #dad587 70%)"
      : "linear-gradient(180deg, #b5f2d1 20%, #e1cf83 80%)"};
`;

export default GlobalStyle;
