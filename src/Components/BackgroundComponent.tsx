import React, { ReactElement } from 'react';
import styled from 'styled-components';

const AppDiv = styled.div`
  text-align: left;
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
  transitions: background .5s; /* Make animated color transition */ 
`;

export function BackgroundComponent(props: { children: ReactElement[], temperature?: number; }) {
  const getBackgroundColor = (): string => {
    if (!props.temperature) {
      return 'linear-gradient(-180deg, rgb(247, 191, 176) 0%, rgb(223, 210, 127) 100%)'
    }
    
    return `linear-gradient(-180deg, ${props.temperature > 15 ? 'rgb(247, 191, 176)' : 'rgb(176, 247, 220)' } 0%, rgb(223, 210, 127) 100%)`;
  }
  
  return (
    <AppDiv data-testid="app-background-div" style={{ background: getBackgroundColor() }}>
      {props.children}
    </AppDiv>
  );
}