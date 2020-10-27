import React from "react";
import {
  SearchBox,
  SearchBoxContainer,
  SearchBoxTitle,
} from "./searchBoxContainer.element";

interface props {
  onBlur: any;
  onChange: any;
  searchText: any;
}

const InputBox = ({ onBlur, onChange, searchText }: props) => {
  return (
    <SearchBoxContainer>
      <SearchBoxTitle>
        Type in your location and we tell you what weather to expect
      </SearchBoxTitle>
      <SearchBox onBlur={onBlur} onChange={onChange} value={searchText} />
    </SearchBoxContainer>
  );
};

export default InputBox;
