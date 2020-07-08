import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  height:100%;
  padding: 25px;
  box-sizing:border-box;
  @media (max-width: 768px) {
    padding:15px;
  }
  &.warm{
    background: rgb(255,106,75);
    background: -webkit-linear-gradient(0deg, rgba(255,106,75,1) 0%, rgba(241,116,51,1) 43%, rgba(255,233,0,1) 100%);
    background: -moz-linear-gradient(0deg, rgba(255,106,75,1) 0%, rgba(241,116,51,1) 43%, rgba(255,233,0,1) 100%);
    background: -o-linear-gradient(0deg, rgba(255,106,75,1) 0%, rgba(241,116,51,1) 43%, rgba(255,233,0,1) 100%);
    background: linear-gradient(0deg, rgba(255,106,75,1) 0%, rgba(241,116,51,1) 43%, rgba(255,233,0,1) 100%);
  }
  &.cold{
    background: rgb(0,161,161);
    background: -webkit-linear-gradient(0deg, rgba(0,161,161,1) 0%, rgba(0,146,175,1) 43%, rgba(21,113,170,1) 100%);
    background: -moz-linear-gradient(0deg, rgba(0,161,161,1) 0%, rgba(0,146,175,1) 43%, rgba(21,113,170,1) 100%);
    background: -o-linear-gradient(0deg, rgba(0,161,161,1) 0%, rgba(0,146,175,1) 43%, rgba(21,113,170,1) 100%);
    background: linear-gradient(0deg, rgba(0,161,161,1) 0%, rgba(0,146,175,1) 43%, rgba(21,113,170,1) 100%);
  }
`

type BackgroundProps = {
  temperature: number,
};

export const Background: FunctionComponent<BackgroundProps> = ({ temperature, children }) => (
  <Container className={temperature >= 15 ? 'warm' : 'cold'}>
    {children}
  </Container>
)
