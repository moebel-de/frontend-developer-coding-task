import React from "react";
import { CuttentTemprature, Degree } from "./currentTemprarture.element";
import Icon from "../icon";
import { Digit } from "../temprature/temprarure.element";
interface props {
  temp: String;
}

const CurrentTemprature = ({ temp }: props) => {
  return (
    <CuttentTemprature>
      <Icon icon="sunny" color="black" size={50} />
      <Digit size="80px">{temp}</Digit>
      <Degree>
        <Icon icon="degree" color="black" size={180} />
      </Degree>
    </CuttentTemprature>
  );
};

export default CurrentTemprature;
