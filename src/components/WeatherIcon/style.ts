import styled from "styled-components";

type WeatherIconStyleProps = {
  sizeInPx: number;
};

export const WeatherIconStyle = styled.span<WeatherIconStyleProps>`
  width: ${({ sizeInPx }) => sizeInPx}px;
  height: ${({ sizeInPx }) => sizeInPx}px;
  display: inline-block;
`;
