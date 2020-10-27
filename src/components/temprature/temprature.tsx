import React from "react";
import { Content, Degree, Digit } from "./temprarure.element";
import Icon from "../icon";

interface props {
  name: string;
  size: number;
}

const Temprature = ({ name, size }: props) => {
  return (
    <Content>
      <Digit size="60px">{name}</Digit>
      <Degree>
        <Icon icon="degree" color="black" size={size} />
      </Degree>
    </Content>
  );
};

export default Temprature;
