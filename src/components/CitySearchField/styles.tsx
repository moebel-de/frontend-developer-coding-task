import styled from "styled-components";

export const IconContainer = styled.div`
  width: 54px;
  height: 54px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.input`
  border-radius: 12px;
  font-size: 24px;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  margin-right: -58px;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  align-items: center;
`;

export const Label = styled.label`
  padding: 20px 0;
  display: block;
`;

export const Button = styled.button`
  border: none;
  display: flex;
  border-radius: 0 12px 12px 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  :hover,
  :focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.2);
  }
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
