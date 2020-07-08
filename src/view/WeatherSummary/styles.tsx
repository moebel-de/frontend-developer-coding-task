import styled from 'styled-components';

export const Container = styled.div``;

export const TextInputContainer = styled.div`
  position: relative;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

type ListContainerProps = {
  focus: boolean;
};

export const ListContainer = styled.div<ListContainerProps>`
  transition: filter 0.3s ease-in-out;
  ${(props) => props.focus && `filter: blur(10px);`}
`;
