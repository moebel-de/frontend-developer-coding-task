import React from "react";
import styled from "styled-components";

import { ReactComponent as CircleSpinner } from "../../assets/images/svg-icons/circle-spinner.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function Loader() {
  return (
    <Container>
      <CircleSpinner width="144px" height="144px" />
    </Container>
  );
}

export default Loader;
