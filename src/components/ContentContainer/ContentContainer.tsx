import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledContentContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:25px;
  filter: blur(0);
  transition: filter 0.3s linear;
  &.blur{
    filter: blur(7px);
    transition: filter 0.3s linear;
  }
  >div{
    width:100%;
    max-width:500px;

  }
`

type ContentContainerProps = {
  focus: boolean
};

export const ContentContainer: FunctionComponent<ContentContainerProps> = ({ focus, children }) => (
  <StyledContentContainer theme={{ blur: focus }} className={focus ? 'blur' : ''}>
    <div>
      {children}
    </div>
  </StyledContentContainer>
)