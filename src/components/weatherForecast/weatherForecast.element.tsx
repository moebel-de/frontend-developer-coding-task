import styled from "styled-components";

interface props {
  size?: string;
  blur?: boolean;
}

export const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  filter: ${({ blur }: props) => (blur === true ? "Blur(5px)" : "none")};
`;
export const DayDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const Temp = styled.div`
  font-size: 18px;
  flex-direction: row;
`;

export const TempDetails = styled.p`
  flex-direction: row;
`;

export const Day = styled.p`
  font-size: 18px;
`;
export const WeatherIcon = styled.div`
  margin-left: 20px;
  margin-top: -15px;
`;
