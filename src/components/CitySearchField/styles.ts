import styled from "styled-components";

import { ReactComponent as ArrowRightIcon } from "../../assets/images/svg-icons/arrow-right.svg";

export const Container = styled.form`
  padding: 1.25em;
`;

export const Label = styled.label`
  display: block;
  cursor: pointer;
  margin-bottom: 1em;
`;

export const SearchBox = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.2);
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 1.875em;
  margin-bottom: 1.875em;
`;

export const Input = styled.input`
  flex: 2 1 0%;
  border: none;
  background: inherit;
  border-radius: inherit;
  color: rgb(43, 18, 2);
  font-size: 1.875rem;
  height: 100%;
  width: 100%;
  padding: 0;

  &:focus {
    outline-width: 0;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export const ArrowIcon = styled(ArrowRightIcon)`
  width: 72px;
  height: 72px;
`;

export const SubmitButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  font-size: 0;
`;
