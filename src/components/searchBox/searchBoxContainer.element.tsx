import styled from "styled-components";

export const SearchBox = styled.input`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 0px 16px;
  border-radius: 10px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  border: none;
  line-height: normal;
  color: #282828;
  outline: none;
  font-weight: bold;
  /* box-shadow: 4px 4px 4px 0px white; */
  transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
    0.1s padding ease-in-out;
  -webkit-appearance: none;
`;

export const SearchBoxContainer = styled.div`
  margin: 40px;
`;

export const SearchBoxTitle = styled.p`
  margin-bottom: 20px;
`;
