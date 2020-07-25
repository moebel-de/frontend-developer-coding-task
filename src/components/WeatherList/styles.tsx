import styled, { css } from "styled-components";

type OuterContainerProps = {
  isBlurred?: boolean;
};

const blurredFilter = css`
  filter: blur(8px);
`;

export const OuterContainer = styled.div<OuterContainerProps>`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 40px;
  transition: filter 0.3s ease-in-out;
  ${({ isBlurred }) => (isBlurred ? blurredFilter : "")};
`;

const onclickStyle = css`
  background-color: #ffffff55;
  border-radius: 12px;
  padding: 0 10px;
  cursor: pointer;
  margin: 0 -10px;
`;

export const InnerContainer = styled.div`
  display: flex;
  font-size: 28px;
  align-items: center;
  height: 60px;
  > div {
    display: flex;
  }
  div:nth-child(1) {
    flex: 2;
  }
  div:nth-child(2) {
    flex: 1;
    justify-content: center;
  }
  ${({ onClick }) => (!!onClick ? onclickStyle : "")};
`;

export const TodayContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  font-size: 80px;
  font-weight: 900;
  align-items: center;
  > div {
    display: flex;
  }
  > * {
    padding: 0 10px;
  }
`;
